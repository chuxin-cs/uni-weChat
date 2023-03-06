/**
 * @author 初心
 * @description 代理模式
 * @param {Function} fn 微信小程序API (wx.login、wx.request、wx.getUserInfo、wx.getSetting) 等
 */
export function promisic(fn) {
    return (params) => {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (data) => resolve(data), fail: (error) => reject(error),
            });
            fn(args);
        })
    }
}