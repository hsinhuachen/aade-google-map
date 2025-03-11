export default [
    { src: '@/plugins/directives/index', mode: 'client' },
    { src: '@/plugins/prototype/index', mode: 'client' },
    { src: '@/plugins/svgSupportIE', mode: 'client' },
    { src: '@/plugins/lazyLoad', mode: 'client' },
    { src: '@/plugins/router' },
    { src: '@/plugins/globalComposition' },
    { src: '@/plugins/gsap', mode: 'client' },
    // { src: '@/plugins/i18n' }, // TODO 預備捨棄
]
