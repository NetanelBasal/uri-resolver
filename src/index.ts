export function resolve(url: string, params: {
    [key: string]: string
} = {}) {
    return Object.keys(params)
        .reduce((acc, key) => acc.replace(`:${key}`, params[key]), url);
}