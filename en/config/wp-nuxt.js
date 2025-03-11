export default {
    endpoint: 'http://localhost:9000/wp-json',
    customRoutes: [
        { // custom route
            extension: 'api',
            route: 'field/(?P<s>)',
            name: 'field',
        },
        { // custom route
            extension: 'api',
            route: 'fields/(?P<s>)',
            name: 'fields',
        },
        { // custom route
            extension: 'api',
            route: 'languages',
            name: 'lang',
        },
        { // custom post type
            extension: 'wp/v2',
            route: 'news',
            name: 'news',
        },
        { // custom taxonomy
            extension: 'wp/v2',
            route: 'cat-news',
            name: 'cat-news',
        },
    ],
}
