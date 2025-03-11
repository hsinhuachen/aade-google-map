

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: true,
  locales: [{"code":"en","iso":"en-US"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "_",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"en","onlyOnNoPrefix":false,"onlyOnRoot":true,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "https://aade.blockstudio.tw/en",
  vuex: false,
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: true,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","iso":"en-US"}],
  localeCodes: ["en"],
}
