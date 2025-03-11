// https://github.com/isaacs/node-lru-cache
export const config = {
    max: 500, // maximum size of the cache, Setting it to 0 makes it be Infinity
    maxAge: 1000 * 60 * 60, // ms -> s -> m -> h
}
