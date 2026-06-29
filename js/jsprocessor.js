// ======================== 核心功能 ========================

// ---------- 获取/设置 ----------
function getInput() { return document.getElementById('inputCode').value; }
function setOutput(t) { document.getElementById('outputCode').value = t; updateStats(); }

// ---------- 公共预处理 ----------
function preprocess(code) {
    // 去注释 + 去首尾空白
    return code.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '').trim();
}

// ---------- 工具：随机字符串 ----------
function randStr(len) {
    const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
    let r = '';
    for (let i = 0; i < len; i++) r += c[Math.floor(Math.random() * c.length)];
    return r;
}

// ---------- 工具：RC4 加密 ----------
function rc4(data, key) {
    let s = [], i, j = 0, x, res = '';
    for (i = 0; i < 256; i++) s[i] = i;
    for (i = 0; i < 256; i++) {
        j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
        x = s[i]; s[i] = s[j]; s[j] = x;
    }
    i = 0; j = 0;
    for (let y = 0; y < data.length; y++) {
        i = (i + 1) % 256;
        j = (j + s[i]) % 256;
        x = s[i]; s[i] = s[j]; s[j] = x;
        res += String.fromCharCode(data.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
    }
    return btoa(res);
}

// ---------- 工具：Base64 ----------
function base64Encode(str) { return btoa(unescape(encodeURIComponent(str))); }

// ---------- 生成花指令 ----------
function genJunk(count) {
    const names = ['_0x', '_x', '_tmp', '_r', '_k'];
    let junk = '';
    for (let i = 0; i < count; i++) {
        const n = names[Math.floor(Math.random() * names.length)] + randStr(4);
        const val = Math.random() > 0.5 ? Math.floor(Math.random() * 9999) : '"' + randStr(3) + '"';
        junk += 'var ' + n + '=' + val + ';';
    }
    return junk;
}

// ---------- 生成反调试代码 ----------
function antiDebugCode() {
    return `
(function(){
    var ck=function(){try{(function(){return false;}['constructor']('debugger')());}catch(e){}};
    ck();
    setInterval(function(){
        var t=performance.now();
        try{(function(){return false;}['constructor']('debugger')());}catch(e){}
        if(performance.now()-t>150){
            try{document.body.innerHTML='';document.head.innerHTML='';}catch(e){}
        }
    },300);
    try{
        Object.defineProperty(window,'eruda',{value:undefined,writable:false,configurable:false});
    }catch(e){}
    document.addEventListener('keydown',function(e){
        if(e.key==='F12'||e.keyCode===123||(e.ctrlKey&&e.shiftKey&&(e.key==='I'||e.key==='i')))
            e.preventDefault();
    },true);
})();
`.replace(/\s+/g,' ');
}

// ======================== 1. 不可逆加密 ========================
function irreversibleEncrypt() {
    let code = getInput();
    if (!code) return showToast('<i class="fa fa-warning"></i> 请先输入代码');
    try {
        code = preprocess(code);
        // 变量名混淆
        const varMap = new Map();
        let counter = 0;
        code = code.replace(/\b(var|let|const|function)\s+(\w+)/g, (m, kw, name) => {
            if (!varMap.has(name)) varMap.set(name, '_o' + (counter++).toString(16) + randStr(3));
            return kw + ' ' + varMap.get(name);
        });
        for (const [old, neu] of varMap) {
            const re = new RegExp('(?<![\\w$])' + old + '(?![\\w$])', 'g');
            code = code.replace(re, neu);
        }
        // 字符串编码
        code = code.replace(/(["'])((?:(?!\1|\\).|\\.)*?)\1/g, (m, q, str) => {
            if (str.length < 2) return m;
            const codes = [];
            for (let i = 0; i < str.length; i++) codes.push(str.charCodeAt(i));
            return '(function(){var _s=String.fromCharCode(' + codes.join(',') + ');return _s;})()';
        });
        // 控制流打乱
        code = code.replace(/\bif\s*\(([^)]+)\)\s*\{([^}]*)\}/g, (m, cond, body) => {
            const fk = '_f' + randStr(4);
            return '(function(){var ' + fk + '=1;if(' + cond + '){' + body + '}return ' + fk + ';})();';
        });
        // 花指令
        if (document.getElementById('junkSwitch').checked) {
            const density = parseInt(document.getElementById('junkDensity').value) || 3;
            code = code.replace(/\{[^}]*\}/g, (block) => {
                if (block.length < 8) return block;
                return block.replace('{', '{' + genJunk(density));
            });
        }
        // 反调试
        if (document.getElementById('antiDebugSwitch').checked) {
            code = antiDebugCode() + ';' + code;
        }
        // 最终压缩
        code = compressRaw(code);
        setOutput(code);
        showToast('<i class="fa fa-bolt"></i> 不可逆加密完成！原始代码无法还原');
    } catch (e) {
        showToast('<i class="fa fa-times"></i> 加密失败: ' + e.message);
    }
}

// ======================== 2. 可逆加密 ========================
function reversibleEncrypt() {
    let code = getInput();
    if (!code) return showToast('<i class="fa fa-warning"></i> 请先输入代码');
    try {
        code = preprocess(code);
        const encodeType = document.getElementById('encodeType').value;
        const useJunk = document.getElementById('junkSwitch').checked;
        const junkDensity = parseInt(document.getElementById('junkDensity').value) || 3;
        const useAntiDebug = document.getElementById('antiDebugSwitch').checked;

        // 生成密钥
        const key = randStr(8);
        // 编码代码
        let encoded;
        if (encodeType === 'rc4') {
            encoded = rc4(code, key);
        } else {
            encoded = base64Encode(code);
        }

        // 构建解密执行器
        let decryptor = '';
        if (encodeType === 'rc4') {
            decryptor = `
(function(k,e){
    var s=[],i,j=0,x,r='';
    for(i=0;i<256;i++)s[i]=i;
    for(i=0;i<256;i++){j=(j+s[i]+k.charCodeAt(i%k.length))%256;x=s[i];s[i]=s[j];s[j]=x;}
    i=0;j=0;
    var d=atob(e);
    for(var y=0;y<d.length;y++){i=(i+1)%256;j=(j+s[i])%256;x=s[i];s[i]=s[j];s[j]=x;r+=String.fromCharCode(d.charCodeAt(y)^s[(s[i]+s[j])%256]);}
    eval(r);
})('${key}','${encoded}');
`.replace(/\s+/g,' ');
        } else {
            decryptor = `
(function(e){
    var d=decodeURIComponent(escape(atob(e)));
    eval(d);
})('${encoded}');
`.replace(/\s+/g,' ');
        }

        // 花指令包裹
        if (useJunk) {
            const junkBlock = genJunk(junkDensity);
            decryptor = '(function(){' + junkBlock + decryptor + '})();';
        }

        // 反调试前缀
        if (useAntiDebug) {
            decryptor = antiDebugCode() + ';' + decryptor;
        }

        setOutput(decryptor);
        showToast('<i class="fa fa-recycle"></i> 可逆加密完成 (编码: ' + encodeType.toUpperCase() + ')');
    } catch (e) {
        showToast('<i class="fa fa-times"></i> 加密失败: ' + e.message);
    }
}

// ======================== 3. 格式化 ========================
function formatJS() {
    const code = getInput();
    if (!code) return showToast('<i class="fa fa-warning"></i> 请先输入代码');
    try {
        let fmt = '', indent = 0;
        const lines = code.split('\n');
        for (let line of lines) {
            const t = line.trim();
            if (!t) continue;
            if (/^[}\])]/.test(t)) indent = Math.max(0, indent - 1);
            fmt += '  '.repeat(indent) + t + '\n';
            if (/[{[(]$/.test(t)) indent++;
        }
        setOutput(fmt.trimEnd());
        showToast('<i class="fa fa-cubes"></i> 格式化完成');
    } catch (e) {
        showToast('<i class="fa fa-times"></i> 格式化失败: ' + e.message);
    }
}

// ======================== 4. 压缩 ========================
function compressJS() {
    const code = getInput();
    if (!code) return showToast('<i class="fa fa-warning"></i> 请先输入代码');
    try {
        const out = compressRaw(code);
        setOutput(out);
        const ratio = ((1 - out.length / code.length) * 100).toFixed(1);
        showToast('<i class="fa fa-file-archive-o"></i> 压缩完成，减少 ' + ratio + '%');
    } catch (e) {
        showToast('<i class="fa fa-times"></i> 压缩失败: ' + e.message);
    }
}

function compressRaw(c) {
    return c
        .replace(/\/\/.*$/gm, '')
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\s+/g, ' ')
        .replace(/\s*([{}();,+\-*/%=<>!&|^~?:])\s*/g, '$1')
        .replace(/;\s*}/g, '}')
        .replace(/^\s+/, '').replace(/\s+$/, '');
}

// ======================== 5. 去注释（独立） ========================
function removeCommentsOnly() {
    const code = getInput();
    if (!code) return showToast('<i class="fa fa-warning"></i> 请先输入代码');
    try {
        const out = code.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*[\r\n]/gm, '');
        setOutput(out);
        showToast('<i class="fa fa-tags"></i> 已去除所有注释');
    } catch (e) {
        showToast('<i class="fa fa-times"></i> 处理失败: ' + e.message);
    }
}

// ======================== 6. 去缩进（独立） ========================
function removeIndentOnly() {
    const code = getInput();
    if (!code) return showToast('<i class="fa fa-warning"></i> 请先输入代码');
    try {
        const out = code.split('\n').map(l => l.trimStart()).join('\n').replace(/\n{3,}/g, '\n\n');
        setOutput(out);
        showToast('<i class="fa fa-arrows-h"></i> 已去除缩进');
    } catch (e) {
        showToast('<i class="fa fa-times"></i> 处理失败: ' + e.message);
    }
}

// ======================== 辅助功能 ========================
function clearAll() {
    document.getElementById('inputCode').value = '';
    document.getElementById('outputCode').value = '';
    updateStats();
    showToast('<i class="fa fa-trash-o"></i> 已清空');
}

function copyOutput() {
    const out = document.getElementById('outputCode');
    if (!out.value) return showToast('<i class="fa fa-warning"></i> 没有内容');
    navigator.clipboard.writeText(out.value).then(() => showToast('<i class="fa fa-clipboard"></i> 已复制')).catch(() => {
        out.select(); document.execCommand('copy'); showToast('<i class="fa fa-clipboard"></i> 已复制');
    });
}

function updateStats() {
    const ic = document.getElementById('inputCode').value.length;
    const oc = document.getElementById('outputCode').value.length;
    document.getElementById('inputCount').textContent = ic + ' 字符';
    document.getElementById('outputCount').textContent = oc + ' 字符';
    const st = document.getElementById('statusText');
    if (oc) {
        const ratio = ic ? ((oc/ic)*100).toFixed(1) : 0;
        st.innerHTML = '<i class="fa fa-bar-chart"></i> 原 ' + ic + ' → 现 ' + oc + ' (' + ratio + '%)';
    } else {
        st.innerHTML = '<i class="fa fa-lightbulb-o"></i> 就绪 · 支持 Base64 / RC4 编码 · 花指令 · 反调试';
    }
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerHTML = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2600);
}

// ---------- 实时更新 ----------
document.getElementById('inputCode').addEventListener('input', updateStats);

// ---------- 初始示例 ----------
document.getElementById('inputCode').value = `// 计算阶乘
function factorial(n) {
    /* 递归实现 */
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 测试
console.log(factorial(5));`;

updateStats();
showToast('<i class="fa fa-rocket"></i> 工具已就绪 · 试试不同功能组合');