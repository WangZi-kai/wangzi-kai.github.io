document.write("<h2>屏幕细节：</h2>")
document.write("<br />")
document.write("屏幕分辨率: ")
document.write(screen.width + "*" + screen.height)
document.write("<br />")
document.write("可用视区: ")
document.write(screen.availWidth + "*" + screen.availHeight)
document.write("<br />")
document.write("色深: ")
document.write(screen.colorDepth)
document.write("<br />")
document.write("缓冲深度: ")
document.write(screen.bufferDepth)
document.write("<br />")
document.write("每英寸水平点数: ")
document.write(screen.deviceXDPI)
document.write("<br />")
document.write("每英寸垂直点数: ")
document.write(screen.deviceYDPI)
document.write("<br />")
document.write("每英寸水平方向常规点数: ")
document.write(screen.logicalXDPI)
document.write("<br />")
document.write("每英寸垂直方向常规点数: ")
document.write(screen.logicalYDPI)
document.write("<br />")
document.write("是否启用字体平滑功能: ")
document.write(screen.fontSmoothingEnabled)
document.write("<br />")
document.write("颜色分辨率: ")
document.write(screen.pixelDepth)
document.write("<br />")
document.write("刷新频率: ")
document.write(screen.updateInterval)
document.write("<br />")
document.write("<h2>浏览器细节：</h2>");
document.write("<br />")
var x = navigator;
document.write("代号=" + x.appCodeName);
document.write("<br />");
document.write("次要版本=" + x.appMinorVersion);
document.write("<br />");
document.write("名称=" + x.appName);
document.write("<br />");
document.write("版本=" + x.appVersion);
document.write("<br />");
document.write("是否启用Cookie=" + x.cookieEnabled);
document.write("<br />");
document.write("CPU等级=" + x.cpuClass);
document.write("<br />");
document.write("是否处于联机模式=" + x.onLine);
document.write("<br />");
document.write("操作系统、硬件平台=" + x.platform);
document.write("<br />");
document.write("UA（用户代理）=" + x.userAgent);
document.write("<br />");
document.write("浏览器语言=" + x.browserLanguage);
document.write("<br />");
document.write("系统语言=" + x.systemLanguage);
document.write("<br />");
document.write("用户语言=" + x.userLanguage);
