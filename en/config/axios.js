export const axios = {
    browserBaseURL: '/api',
    proxy: true,
}

export const proxy = {
    '/api': {
        target: process.env.APP_API,
        pathRewrite: { '^/api': '' },
    },
}
