const meta = [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { property: 'og:locale', content: 'en' },
    { property: 'og:type', content: 'website' },
    { hid: 'description', name: 'description', content: process.env.APP_DESC },
    { hid: 'og:title', property: 'og:title', content: process.env.APP_TITLE },
    { hid: 'og:description', property: 'og:description', content: process.env.APP_DESC },
    { hid: 'og:url', property: 'og:url', content: process.env.APP_URL },
    { hid: 'og:site_name', property: 'og:site_name', content: process.env.APP_TITLE },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { hid: 'og:image', property: 'og:image', content: `${process.env.APP_URL}/og_img.jpg` },
    { hid: 'og:image:alt', property: 'og:image:alt', content: process.env.APP_DESC },
    { name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:description', name: 'twitter:description', content: process.env.APP_DESC },
    { hid: 'twitter:title', name: 'twitter:title', content: process.env.APP_TITLE },
    { hid: 'twitter:image', name: 'twitter:image', content: `${process.env.APP_URL}/og_img.jpg` },
    { hid: 'name', itemprop: 'name', content: process.env.APP_TITLE },
    { itemprop: 'description', content: process.env.APP_DESC },
    { hid: 'image', itemprop: 'image', content: `${process.env.APP_URL}/og_img.jpg` },
]

const script = [
    {
        type: 'text/javascript',
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCgIk4clBMum-qHRyZMX9Z_eU5WHX4fUO0',
        body: true,
    },
]

// Google 搜尋建立索引
if (process.env.APP_GOOGLEABLE !== '1') {
    console.warn('config/head: Google搜尋被隱藏。')
    meta.push(
        { name: 'googlebot', content: 'noindex' },
        { name: 'robots', content: 'noindex' }
    )
} else {
    console.log('config/head: 可被Google。')
}

export default {
    title: 'process.env.APP_TITLE',
    htmlAttrs: { lang: 'zh' },
    meta,
    script,
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
}
