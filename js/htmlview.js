var textarea = document.getElementById('htmlEditor');
var editor = CodeMirror.fromTextArea(textarea, {
    mode: 'htmlmixed',
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    indentUnit: 4,
    tabSize: 4,
    theme: 'default',
    smartIndent: true,
    electricChars: true,
    extraKeys: {
        'Backspace': 'indentMore'  // 按退格键时减少缩进
    }
});


var previewPane = document.getElementById('previewPane');
var toggleDesktop = document.getElementById('toggleBtnDesktop');
var toggleMobile = document.getElementById('toggleBtnMobile');
var iframe = document.getElementById('previewIframe');

var desktopExpanded = false;
var mobileExpanded = false;

function isMobileLayout() {
    return window.innerWidth <= 760;
}

function updatePreview() {
    var code = editor.getValue();
    var doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
}

// 核心修复：展开/折叠后强制刷新编辑器，并重新测量尺寸
function refreshEditor() {
    // 多次刷新以确保布局稳定
    setTimeout(function() { editor.refresh(); }, 10);
    setTimeout(function() { editor.refresh(); }, 100);
    setTimeout(function() { editor.refresh(); }, 300);
}

// 获取当前时间并返回 yyyy-mm-dd-h:m:s 格式的字符串（完整年份）
function getFormattedTime() {
    const now = new Date();
    
    const year = now.getFullYear();                // 完整四位年份
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}

toggleDesktop.addEventListener('click', function() {
    if (isMobileLayout()) return;
    desktopExpanded = !desktopExpanded;
    if (desktopExpanded) {
        previewPane.classList.add('expanded');
        toggleDesktop.innerHTML = '<i class="fa fa-caret-right"></i>';
        updatePreview();
    } else {
        previewPane.classList.remove('expanded');
        toggleDesktop.innerHTML = '<i class="fa fa-caret-left"></i>';
    }
    refreshEditor();
});

toggleMobile.addEventListener('click', function() {
    if (!isMobileLayout()) return;
    mobileExpanded = !mobileExpanded;
    if (mobileExpanded) {
        previewPane.classList.add('mobile-expanded');
        toggleMobile.innerHTML = '<i class="fa fa-caret-down"></i>';
        updatePreview();
    } else {
        previewPane.classList.remove('mobile-expanded');
        toggleMobile.innerHTML = '<i class="fa fa-caret-up"></i>';
    }
    refreshEditor();
});

var timer = null;
editor.on('change', function() {
    if (isMobileLayout()) {
        if (!mobileExpanded) return;
    } else {
        if (!desktopExpanded) return;
    }
    clearTimeout(timer);
    timer = setTimeout(function() {
        updatePreview();
    }, 350);
});

document.getElementById('runDocBtn').addEventListener('click', function() {
    var code = editor.getValue();
    var newTab = window.open('about:blank', '_blank');
    if (newTab) {
        newTab.document.open();
        newTab.document.write(code);
        newTab.document.close();
    } else {
        alert('请允许弹出窗口，或手动复制代码运行');
    }
});

document.getElementById('downloadLink').addEventListener('click', function(e) {
    document.getElementById('downloadLink').setAttribute("download","hitech_htmlview_" + getFormattedTime());
    var blob = new Blob([editor.getValue()], { type: 'text/html;charset=utf-8' });
    this.href = URL.createObjectURL(blob);
    setTimeout(function() {
        URL.revokeObjectURL(this.href);
    }.bind(this), 150);
});

window.addEventListener('resize', function() {
    var mobile = isMobileLayout();
    if (mobile) {
        toggleDesktop.style.display = 'none';
        toggleMobile.style.display = 'flex';
        if (!mobileExpanded) {
            previewPane.classList.remove('mobile-expanded');
            toggleMobile.innerHTML = '<i class="fa fa-caret-up"></i>';
        } else {
            previewPane.classList.add('mobile-expanded');
            toggleMobile.innerHTML = '<i class="fa fa-caret-down"></i>';
        }
    } else {
        toggleDesktop.style.display = 'flex';
        toggleMobile.style.display = 'none';
        previewPane.classList.remove('mobile-expanded');
        if (desktopExpanded) {
            previewPane.classList.add('expanded');
            toggleDesktop.innerHTML = '<i class="fa fa-caret-right"></i>';
        } else {
            previewPane.classList.remove('expanded');
            toggleDesktop.innerHTML = '<i class="fa fa-caret-left"></i>';
        }
    }
    refreshEditor();
});

if (isMobileLayout()) {
    toggleDesktop.style.display = 'none';
    toggleMobile.style.display = 'flex';
    previewPane.classList.remove('mobile-expanded');
    mobileExpanded = false;
    toggleMobile.innerHTML = '<i class="fa fa-caret-up"></i>';
} else {
    toggleDesktop.style.display = 'flex';
    toggleMobile.style.display = 'none';
    desktopExpanded = false;
    previewPane.classList.remove('expanded');
    toggleDesktop.innerHTML = '<i class="fa fa-caret-left"></i>';
}

// 初始化刷新
refreshEditor();
