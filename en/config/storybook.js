// https://storybook.nuxtjs.org/
export default {
    port: 3003,
    stories: [
        '~/storybook/*.stories.js',
    ],
    addons: [
        '@storybook/addon-controls',
        '@storybook/addon-notes',
    ],
}
// export default function () {
//     const { nuxt } = this

//     nuxt.hook('storybook:config', ({ stories }) => {
//         stories.push('./storybook/*.stories.js')
//     })
// }
