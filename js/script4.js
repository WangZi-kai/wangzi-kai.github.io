var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return { 
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
        iPhone: u.indexOf('iPhone') > -1, 
        iPad: u.indexOf('iPad') > -1, 
    };
}(),
}
if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {
    window.location.href = "/download/everyday.ipa";
}
else if (browser.versions.android) {
    window.location.href = "/download/everyday.apk";
}
else{
    window.location.href = '/download/check.html'; 
}
