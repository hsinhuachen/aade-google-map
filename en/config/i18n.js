const locales = process.env.APP_LOCALES.split(',')
const defaultLang = process.env.APP_DEFAULT_LANG

// 確保預設語言在語言列當中
if (!locales.includes(defaultLang)) {
    throw new Error(`config/i18n: Default language ${defaultLang} is not in the list of locales: ${locales}`)
} else {
    console.log(`config/i18n: \n-Default: ${defaultLang};\n-All: [${locales.join(', ')}]`)
}

// 語言設定檔 <有時間可以研究i18n-iso-countries比較正確>
const i18n = {
    zh: {
        code: 'zh',
        iso: 'zh_TW',
    },
    en: {
        code: 'en',
        iso: 'en-US',
    },
    ja: {
        code: 'ja',
        iso: 'ja-JP',
    },
}

export default {
    baseUrl: process.env.APP_URL,
    defaultLocale: process.env.APP_DEFAULT_LANG,
    vueI18n: {
        fallbackLocale: process.env.APP_DEFAULT_LANG,
    },
    detectBrowserLanguage: {
        fallbackLocale: process.env.APP_DEFAULT_LANG,
        onlyOnRoot: true,
    },
    locales: locales.map(code => i18n[code]),
    routesNameSeparator: '_',
    skipSettingLocaleOnNavigate: true,
    seo: false,
    vuex: false,
    vueI18nLoader: true,
}
