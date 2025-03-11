const isGtmAtDev = (() => {
    if (process.env.GTM_DEV === '1') {
        console.log('config/gtm: GTM 被開啟')
        return true
    }
    return false
})()

export default {
    enabled: isGtmAtDev,
    debug: false,

    id: process.env.GTM_ID,
    layer: 'dataLayer',
    variables: {},

    pageTracking: false,
    pageViewEventName: 'nuxtRoute',

    autoInit: true,
    respectDoNotTrack: true,

    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    crossOrigin: false,

    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html',
}
