import { isWindowsPhone } from '../os/isWindowsPhone';
export function isSafari() {
    const ua = navigator.userAgent;
    const safari = ((/Safari/).test(ua) && !isWindowsPhone());
    const safariVersion = ((/Version\/(\d+)\./).test(ua)) ? parseInt(RegExp.$1, 10) : 0;
    return {
        safari,
        safariVersion
    };
}
//# sourceMappingURL=isSafari.js.map