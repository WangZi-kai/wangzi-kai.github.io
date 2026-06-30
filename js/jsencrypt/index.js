// JavaScript混淆加密解密工具
(function () {
  "use strict";

  /**
   * @typedef {Object} JsDecodeConfig
   * @property {'stringArray'|'callCount'|'evalCode'} decoderLocationMethod
   * @property {number} decoderCallCount
   * @property {number} stringArrayLength
   * @property {string} designDecoderName
   * @property {string} setupCode
   * @property {number} inlineWrappersDepth
   * @property {number} execCount
   * @property {boolean} isRemoveDecoder
   * @property {boolean} isStrongRemove
   * @property {boolean} isMinifiedEnable
   * @property {boolean} mangle
   * @property {boolean} isMarkEnable
   * @property {string} keywordsValue
   */

  // DOM元素
  /** @type {HTMLButtonElement|null} */ const encryptModeBtn = document.getElementById("encryptMode");
  /** @type {HTMLButtonElement|null} */ const decryptModeBtn = document.getElementById("decryptMode");
  /** @type {HTMLTextAreaElement|null} */ const inputCode = document.getElementById("inputCode");
  /** @type {HTMLTextAreaElement|null} */ const outputCode = document.getElementById("outputCode");
  /** @type {HTMLButtonElement|null} */ const processButton = document.getElementById("processButton");
  /** @type {HTMLButtonElement|null} */ const clearInputBtn = document.getElementById("clearInput");
  /** @type {HTMLButtonElement|null} */ const pasteBtn = document.getElementById("pasteBtn");
  /** @type {HTMLButtonElement|null} */ const copyButton = document.getElementById("copyButton");
  /** @type {HTMLButtonElement|null} */ const downloadBtn = document.getElementById("downloadBtn");
  /** @type {HTMLSpanElement|null} */ const inputTitle = document.getElementById("inputTitle");
  /** @type {HTMLSpanElement|null} */ const outputTitle = document.getElementById("outputTitle");
  /** @type {HTMLSpanElement|null} */ const inputStats = document.getElementById("inputStats");
  /** @type {HTMLSpanElement|null} */ const outputStats = document.getElementById("outputStats");
  /** @type {HTMLSpanElement|null} */ const processingTime = document.getElementById("processingTime");
  /** @type {HTMLElement|null} */ const loadingIndicator = document.getElementById("loadingIndicator");
  /** @type {HTMLButtonElement|null} */ const themeToggle = document.getElementById("themeToggle");
  /** @type {SVGElement|null} */ const sunIcon = document.querySelector(".sun-icon");
  /** @type {SVGElement|null} */ const moonIcon = document.querySelector(".moon-icon");
  // CodeMirror 编辑器实例（替代原有高亮层）
  /** @type {any} */ let inputEditor = null;
  /** @type {any} */ let outputEditor = null;
  /** @type {HTMLButtonElement|null} */ const configButton = document.getElementById("configButton");
  /** @type {HTMLDialogElement|null} */ const configDialog = /** @type {HTMLDialogElement|null} */ (document.getElementById("configDialog"));
  /** @type {HTMLButtonElement|null} */ const configClose = document.getElementById("configClose");
  /** @type {HTMLSelectElement|null} */ const decoderLocationMethod = document.getElementById("decoderLocationMethod");
  /** @type {HTMLElement|null} */ const callCountRow = document.getElementById("callCountRow");
  /** @type {HTMLElement|null} */ const stringArrayRow = document.getElementById("stringArrayRow");
  /** @type {HTMLElement|null} */ const evalCodeRow = document.getElementById("evalCodeRow");
  /** @type {HTMLElement|null} */ const setupCodeRow = document.getElementById("setupCodeRow");

  // 兼容全局库
  /** @type {any} */ const CodeMirrorGlobal = window['CodeMirror'];
  /** @type {any} */ const ObfuscatorGlobal = window['JavaScriptObfuscator'];
  /** @type {any} */ const DeobGlobal = window['Deob'];

  // 当前模式：'encrypt' 或 'decrypt'
  /** @type {'encrypt'|'decrypt'} */
  let currentMode = "encrypt";

  // 配置选项默认值
  /** @type {JsDecodeConfig} */
  const defaultConfig = {
    decoderLocationMethod: /** @type {'stringArray'|'callCount'|'evalCode'} */ ('stringArray'),
    decoderCallCount: 2,
    stringArrayLength: 100,
    designDecoderName: '',
    setupCode: '',
    inlineWrappersDepth: 2,
    execCount: 2,
    isRemoveDecoder: true,
    isStrongRemove: true,
    isMinifiedEnable: false,
    mangle: true,
    isMarkEnable: false,
    keywordsValue: ''
  };

  /**
   * 将任意值断言为 JsDecodeConfig，绕过索引签名检查
   * @param {any} v
   * @returns {JsDecodeConfig}
   */
  function castConfig(v) {
    return /** @type {JsDecodeConfig} */ (v);
  }

  /**
   * 将任意值断言为 JsDecodeConfig，绕过索引签名检查
   * @param {any} v
   * @returns {JsDecodeConfig}
   */
  function castConfig(v) {
    return /** @type {JsDecodeConfig} */ (v);
  }

  // 从localStorage加载保存的模式
  function loadSavedMode() {
    const savedMode = /** @type {'encrypt'|'decrypt'|null} */ (localStorage.getItem("jsDecodeMode"));
    if (savedMode && (savedMode === "encrypt" || savedMode === "decrypt")) {
      currentMode = savedMode;
      updateUI();
    }
  }

  // 保存模式到localStorage
  /** @param {'encrypt'|'decrypt'} mode */
  function saveMode(mode) {
    localStorage.setItem("jsDecodeMode", mode);
  }

  // 更新统计信息（兼容 CodeMirror 与原始 textarea）
   function updateStats() {
     const inputText = inputEditor ? inputEditor.getValue() : (inputCode ? inputCode.value : '');
     const outputText = outputEditor ? outputEditor.getValue() : (outputCode ? outputCode.value : '');
     
     const inputLines = inputText ? inputText.split('\n').length : 0;
     const outputLines = outputText ? outputText.split('\n').length : 0;
     
     if (inputStats) inputStats.textContent = `输入: ${inputText.length} 字符, ${inputLines} 行`;
     if (outputStats) outputStats.textContent = `输出: ${outputText.length} 字符, ${outputLines} 行`;
   }

  // 旧的语法高亮逻辑移除（使用 CodeMirror）
  function updateHighlight() {}
  function clearHighlight() {}

  // 旧的滚动同步逻辑移除（使用 CodeMirror 自身滚动）
  function syncScroll() {}

  // 更新UI界面
  function updateUI() {
    // 更新按钮状态
    if (encryptModeBtn) encryptModeBtn.classList.toggle('active', currentMode === 'encrypt');
    if (decryptModeBtn) decryptModeBtn.classList.toggle('active', currentMode === 'decrypt');
    
    if (currentMode === "encrypt") {
      if (inputTitle) inputTitle.textContent = "原始JavaScript代码";
      if (outputTitle) outputTitle.textContent = "加密混淆后的代码";
      if (inputCode) inputCode.placeholder = "请输入要加密混淆的JavaScript代码...";
       if (processButton) processButton.textContent = "开始加密";
     } else {
       if (inputTitle) inputTitle.textContent = "混淆加密的JavaScript代码";
       if (outputTitle) outputTitle.textContent = "解密反混淆后的代码";
       if (inputCode) inputCode.placeholder = "请输入要解密反混淆的JavaScript代码...";
      if (processButton) processButton.textContent = "开始解密";
    }
    clearContent();
    updateStats();
  }

  // 加密函数
  /** @param {string} code */
  function encryptCode(code) {
    try {
      if (typeof ObfuscatorGlobal === "undefined") {
         throw new Error("加密库未加载，请刷新页面重试");
       }

       const obfuscationResult = ObfuscatorGlobal.obfuscate(code, {
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1,
      });

      return obfuscationResult.getObfuscatedCode();
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      throw new Error("加密失败: " + msg);
    }
  }

  // 解密函数
  /** @param {string} code */
  function decryptCode(code) {
    try {
      if (typeof DeobGlobal === "undefined") {
         throw new Error("解密库未加载，请刷新页面重试");
       }

      // 获取当前配置
      const userConfig = getCurrentConfig();

      const deob = new DeobGlobal(code, userConfig);
      const result = deob.run();
      return result.code
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      throw new Error("解密失败: " + msg);
    }
  }

  // 处理代码
  function processCode() {
    if (!inputEditor && !inputCode) return;
    const input = inputEditor ? inputEditor.getValue().trim() : (inputCode ? inputCode.value.trim() : '');

    if (!input) {
      alert("请输入要处理的JavaScript代码");
      return;
    }

    const startTime = Date.now();
    
    try {
      if (processButton) {
        processButton.textContent = "处理中...";
        processButton.disabled = true;
      }
      if (loadingIndicator) loadingIndicator.classList.remove('hidden');
      if (processingTime) processingTime.textContent = "处理中...";

      // 使用 setTimeout 让 UI 有时间更新
      setTimeout(() => {
        try {
          let result;
          if (currentMode === "encrypt") {
            result = encryptCode(input);
          } else {
            result = decryptCode(input);
          }

          if (outputEditor) {
            outputEditor.setValue(result);
          } else if (outputCode) {
            outputCode.value = result;
          }
          const endTime = Date.now();
          const duration = endTime - startTime;
          if (processingTime) processingTime.textContent = `处理完成 (${duration}ms)`;
          updateStats();
        } catch (error) {
          const msg = error instanceof Error ? error.message : String(error);
          alert(msg);
          if (outputEditor) {
            outputEditor.setValue("");
          } else if (outputCode) {
            outputCode.value = "";
          }
          if (processingTime) processingTime.textContent = "处理失败";
        } finally {
          if (processButton) {
            processButton.textContent = currentMode === "encrypt" ? "开始加密" : "开始解密";
            processButton.disabled = false;
          }
          if (loadingIndicator) loadingIndicator.classList.add('hidden');
        }
      }, 100);
    } catch (error) {
      if (processButton) {
        processButton.textContent = currentMode === "encrypt" ? "开始加密" : "开始解密";
        processButton.disabled = false;
      }
      if (loadingIndicator) loadingIndicator.classList.add('hidden');
      if (processingTime) processingTime.textContent = "处理失败";
    }
  }

  // 清空内容
  function clearContent() {
    if (inputEditor) inputEditor.setValue("");
    else if (inputCode) inputCode.value = "";
    if (outputEditor) outputEditor.setValue("");
    else if (outputCode) outputCode.value = "";
    if (processingTime) processingTime.textContent = "就绪";
    updateStats();
    clearHighlight()
  }
  
  // 粘贴代码
  async function pasteCode() {
    try {
      const text = await navigator.clipboard.readText();
      if (inputEditor) inputEditor.setValue(text);
      else if (inputCode) inputCode.value = text;
      updateStats();
    } catch (error) {
      // 如果剪贴板API不可用，提示用户手动粘贴
      if (inputCode) inputCode.focus();
      alert('请使用 Ctrl+V (或 Cmd+V) 粘贴代码');
    }
  }

  // 复制结果
  async function copyResult() {
    const outVal = outputEditor ? outputEditor.getValue() : (outputCode ? String(outputCode.value || '') : '');
    if (!outVal || !String(outVal).trim()) {
      alert("没有可复制的内容");
      return;
    }

    try {
      await navigator.clipboard.writeText(String(outVal || ''));
      // 临时改变按钮文本以提供反馈
      if (copyButton) {
        const originalText = copyButton.textContent;
        copyButton.textContent = "已复制";
        setTimeout(() => {
          if (copyButton) copyButton.textContent = originalText;
        }, 1000);
      }
    } catch (error) {
      // 降级到旧方法（当未启用 CodeMirror 时）
      if (!outputEditor && outputCode) {
        if (typeof outputCode.select === 'function') outputCode.select();
        if (typeof outputCode.setSelectionRange === 'function') outputCode.setSelectionRange(0, 99999);
      }
      try {
        document.execCommand("copy");
        if (copyButton) {
          const originalText = copyButton.textContent;
          copyButton.textContent = "已复制!";
          setTimeout(() => {
            if (copyButton) copyButton.textContent = originalText;
          }, 2000);
        }
      } catch (err) {
        alert("复制失败，请手动复制");
      }
    }
  }
  
  // 下载结果
  function downloadResult() {
    const outText = outputEditor ? outputEditor.getValue() : (outputCode ? outputCode.value : '');
    if (!outText) {
      alert("没有可下载的内容");
      return;
    }
    
    const blob = new Blob([String(outText || '')], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentMode === 'encrypt' ? 'obfuscated.js' : 'deobfuscated.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // 事件监听器
  if (encryptModeBtn) {
    encryptModeBtn.addEventListener("click", function () {
      currentMode = "encrypt";
      saveMode(currentMode);
      updateUI();
    });
  }

  if (decryptModeBtn) {
    decryptModeBtn.addEventListener("click", function () {
      currentMode = "decrypt";
      saveMode(currentMode);
      updateUI();
    });
  }

  if (processButton) processButton.addEventListener("click", processCode);
  if (clearInputBtn) clearInputBtn.addEventListener("click", clearContent);
  if (pasteBtn) pasteBtn.addEventListener("click", pasteCode);
  if (copyButton) copyButton.addEventListener("click", copyResult);
  if (downloadBtn) downloadBtn.addEventListener("click", downloadResult);
  
  // 监听文本变化以更新统计（CodeMirror 在初始化后绑定）

  // 键盘快捷键
  document.addEventListener("keydown", function (e) {
    // Ctrl+Enter 或 Cmd+Enter 处理代码
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      processCode();
    }
    // Ctrl+L 或 Cmd+L 清空
    else if ((e.ctrlKey || e.metaKey) && e.key === "l") {
      e.preventDefault();
      clearContent();
    }
    // Ctrl+C 或 Cmd+C 在输出框获得焦点时复制
    else if ((e.ctrlKey || e.metaKey) && e.key === "c") {
      if (outputEditor && outputEditor.hasFocus()) {
        e.preventDefault();
        copyResult();
      }
    }
  });

  // 主题切换功能
  function loadSavedTheme() {
    const savedTheme = localStorage.getItem('jsDecodeTheme') || 'dark';
    applyTheme(savedTheme);
  }

  /** @param {'light'|'dark'} theme */
  /**
   * @param {'light'|'dark'} theme
   */
  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
    } else {
      document.body.classList.remove('light-theme');
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
    }
    localStorage.setItem('jsDecodeTheme', /** @type {'light'|'dark'} */ (theme));
    // 同步 CodeMirror 主题
    const themeName = (theme === 'light') ? 'eclipse' : 'dracula';
    if (inputEditor) inputEditor.setOption('theme', themeName);
    if (outputEditor) outputEditor.setOption('theme', themeName);
  }

  function toggleTheme() {
    const isLight = document.body.classList.contains('light-theme');
    applyTheme(isLight ? /** @type {'dark'} */ ('dark') : /** @type {'light'} */ ('light'));
  }

  function toggleTheme() {
    const isLight = document.body.classList.contains('light-theme');
    applyTheme(isLight ? 'dark' : 'light');
  }

  // 配置对话框相关函数
  function openConfigDialog() {
    if (configDialog && typeof configDialog.showModal === 'function') {
      configDialog.showModal();
      loadConfigFromStorage();
    }
  }

  function closeConfigDialog() {
    if (configDialog && typeof configDialog.close === 'function') {
      configDialog.close();
      saveConfigToStorage();
    }
  }

  function handleConfigMethodChange() {
    const method = decoderLocationMethod ? decoderLocationMethod.value : 'stringArray';
    
    // 隐藏所有条件行
    if (callCountRow) callCountRow.style.display = 'none';
    if (stringArrayRow) stringArrayRow.style.display = 'none';
    if (evalCodeRow) evalCodeRow.style.display = 'none';
    if (setupCodeRow) setupCodeRow.style.display = 'none';
    
    // 根据选择显示对应的行
    switch (method) {
      case 'callCount':
        if (callCountRow) callCountRow.style.display = 'block';
        break;
      case 'stringArray':
        if (stringArrayRow) stringArrayRow.style.display = 'block';
        break;
      case 'evalCode':
        if (evalCodeRow) evalCodeRow.style.display = 'block';
        if (setupCodeRow) setupCodeRow.style.display = 'block';
        break;
    }
  }

  function loadConfigFromStorage() {
    const savedConfig = localStorage.getItem('jsDecodeConfig');
    /** @type {JsDecodeConfig} */
    const config = savedConfig ? /** @type {JsDecodeConfig} */ (JSON.parse(savedConfig)) : defaultConfig;
    (Object.keys(config)).forEach((key) => {
        const element = /** @type {HTMLElement|null} */ (document.getElementById(String(key)));
        if (element instanceof HTMLInputElement) {
          if (element.type === 'checkbox') {
            element.checked = Boolean(config[key]);
          } else if (element.type === 'number') {
            element.value = String(Number(config[key]));
          } else {
            element.value = String(config[key]);
          }
        } else if (element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement) {
          element.value = String(config[key]);
        }
      });
    handleConfigMethodChange();
  }

  function saveConfigToStorage() {
    /** @type {JsDecodeConfig} */
    const config = { ...defaultConfig };
    Object.keys(defaultConfig).forEach(key => {
       const element = document.getElementById(key);
       if (element) {
         if (element.type === 'checkbox') {
           // @ts-ignore
           config[key] = /** @type {HTMLInputElement} */ (element).checked;
         } else if (element.type === 'number') {
           // @ts-ignore
           config[key] = parseInt(/** @type {HTMLInputElement} */ (element).value) || defaultConfig[key];
         } else {
           // @ts-ignore
           config[key] = /** @type {HTMLInputElement} */ (element).value || defaultConfig[key];
         }
       }
      });
    localStorage.setItem('jsDecodeConfig', JSON.stringify(config));
  }

  function getCurrentConfig() {
    /** @type {JsDecodeConfig} */
    const config = { ...defaultConfig };
    Object.keys(defaultConfig).forEach(key => {
       const element = document.getElementById(key);
       if (element) {
         if (element.type === 'checkbox') {
           // @ts-ignore
           config[key] = element.checked;
         } else if (element.type === 'number') {
           // @ts-ignore
           config[key] = parseInt(element.value) || defaultConfig[key];
         } else {
           // @ts-ignore
           config[key] = element.value || defaultConfig[key];
         }
       }
      });
    return config;
  }

  // 主题切换按钮事件监听
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // 配置对话框事件监听
  if (configButton) {
    configButton.addEventListener('click', openConfigDialog);
  }

  if (configClose) {
    configClose.addEventListener('click', closeConfigDialog);
  }

  if (configDialog) {
    configDialog.addEventListener('click', function(e) {
      if (e.target === configDialog) {
        closeConfigDialog();
      }
    });
  }

  if (decoderLocationMethod) {
    decoderLocationMethod.addEventListener('change', handleConfigMethodChange);
  }

  // 移除旧的语法高亮与滚动同步事件监听（使用 CodeMirror）

  // 初始化：创建 CodeMirror 编辑器并加载保存的设置
  document.addEventListener("DOMContentLoaded", function () {
    if (inputCode && CodeMirrorGlobal) {
      inputEditor = CodeMirrorGlobal.fromTextArea(inputCode, {
        mode: "javascript",
        lineNumbers: true,
        matchBrackets: true,
        lineWrapping: true,
        theme: (localStorage.getItem('jsDecodeTheme') === 'light') ? 'eclipse' : 'dracula',
        viewportMargin: Infinity   // 启用虚拟滚动，长内容不卡顿
      });
      inputEditor.on('change', updateStats);
    }
    if (outputCode && CodeMirrorGlobal) {
      outputEditor = CodeMirrorGlobal.fromTextArea(outputCode, {
        mode: "javascript",
        lineNumbers: true,
        matchBrackets: true,
        readOnly: true,
        lineWrapping: true,
        theme: (localStorage.getItem('jsDecodeTheme') === 'light') ? 'eclipse' : 'dracula',
        viewportMargin: Infinity   // 启用虚拟滚动，长内容不卡顿
      });
      outputEditor.on('change', updateStats);
    }
    // 初始化后刷新，确保正确计算尺寸与滚动条
    setTimeout(function(){
      if (inputEditor) inputEditor.refresh();
      if (outputEditor) outputEditor.refresh();
    }, 0);
    loadSavedMode();
    loadSavedTheme();

    // 监听窗口尺寸变化，刷新编辑器以确保滚动条正确显示
    window.addEventListener('resize', function(){
      if (inputEditor) inputEditor.refresh();
      if (outputEditor) outputEditor.refresh();
    });
  });

  // 如果DOM已经加载完成
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      loadSavedMode();
      loadSavedTheme();
    });
  } else {
    loadSavedMode();
    loadSavedTheme();
  }
})();
