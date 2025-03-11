// import path from 'path'
// import fs from 'fs'
import Webpack from 'webpack'

// HTML Templates
import head from './head'

// Nuxt modules
import wp from './wp-nuxt'
// import gtm from './gtm'
import i18n from './i18n'
import webfontloader from './webfontloader'
import storybook from './storybook'
// import { axios, proxy } from './axios'
import svgSprite from './svg-sprite'
import { config as componentCacheConfig } from './component-cache'

// Client Plugins
import plugins from './plugins'

export default {
    // 資料夾設定
    // srcDir: 'src',
    // dir
    // alias: { 'style': resolve(__dirname, './assets/style')},

    // 主機設定
    dev: process.env.NODE_ENV !== 'production',
    target: 'server',
    server: {
         // host: '0.0.0.0',
	 port: process.env.APP_PORT,
    // // https: {
    // //     key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
    // //     cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
    // // }
    },
    router: {
	base: '/en/',
        middleware: 'routerMiddleware',
    },

    // 共用參數設定 $config
    // dotenv: server-side & client-side
    publicRuntimeConfig: {
        APP_TITLE: '',
        APP_TITLE_TEMPLATE: process.env.APP_TITLE_TEMPLATE,
        APP_DESC: '',
        APP_DEFAULT_LANG: '',
        APP_URL: '',
        APP_API: '',
        APP_BACKEND_API: process.env.APP_BACKEND_API,
        IS_DEV: process.env.NODE_ENV === 'development',
    },
    // dotenv: server-side only
    privateRuntimeConfig: {},

    // Webpack configuration
    build: {
        plugins: [
            new Webpack.ProvidePlugin({}),
        ],
        extend (config, { isDev, isClient, isServer }) {
            // webpack loader
            console.log('error')
        },
    },

    // Globally css
    css: [
        '@/style/_main.scss', // global css
        'swiper/css/swiper.min.css',
    ],
    styleResources: {
        scss: [
            '@/style/mixins/_mixin.scss', // mixin or function only !!!
        ],
    },

    // Vue 設定 [keyCodes, errorHandler, silent]
    // https://vuejs.org/v2/api/#Global-Config
    vue: {
        config: {
            productionTip: true,
        },
    },

    // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate
    // generate: {}

    // 動畫相關
    // pageTransition: 'page'

    // Loading
    // loading: '~/components/Loading/Animation.vue' // 替代組件
    loading: {
        color: process.env.APP_THEME_COLOR,
        failedColor: 'red',
        height: '3px',
        duration: 5000, // ms, maximum duration
        css: false, // remove default css
        rtl: false, // is right to left.
    },

    // Nuxt Components 定義方式
    // https://github.com/nuxt/components
    components: true,

    buildModules: [
        '@nuxtjs/composition-api/module',
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/style-resources',
    ],

    // Nuxt external server
    // serverMiddleware: ['@/server/index'],

    head,

    // modules
    modules: [
        ['@nuxtjs/component-cache', componentCacheConfig],
        '@nuxtjs/axios',
        '@nuxtjs/svg-sprite',
        // '@nuxtjs/gtm',
        'nuxt-rfg-icon',
        'nuxt-i18n',
        'nuxt-route-meta',
        'portal-vue/nuxt',
        'nuxt-webfontloader',
        'wp-nuxt',
	'@nuxtjs/google-gtag',
    ],

    'google-gtag':{
        id: 'G-RWC5B02HW2', // 必填，請填寫剛申請到的追蹤碼ID
        config:{ // 這裡是填寫對gtag的需求選項」
          anonymize_ip: true, 
          send_page_view: false, // 避免頁面刷新時後的重複追蹤
          linker:{ // 跨域追蹤，追蹤兩個相關但不同網域的頁面
            domains:['aade.project.edu.tw']
          }
        },
        debug: false, // 允許在開發中進行追蹤
        disableAutoPageTrack: false // 關閉追蹤每個頁面路由
      },

    // modules configs
    wp,
    // gtm,
    // axios,
    // proxy,
    svgSprite,
    i18n,
    webfontloader,
    storybook,

    // Custom plugin
    plugins,
}
