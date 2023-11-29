
export async function Demo(req, res, next) {
    let app = new API(req, res)

    app.get("/", true, async () => {
        let data = {}
        app.Send(data)
    })
}
export default class APIbeta {
    constructor(req, res) {
        this.req = req
        this.res = res

        this.get = this.get.bind(this)
        this.post = this.post.bind(this)

        this.Send = this.Send.bind(this)

    }

    // Methods
    req = this.req
    res = this.res
    async #METHOD(method, path, auth, callback) {
        let Arguments = Array.from(arguments).slice(1)
        method = Array.from(arguments)[0]
        path = Arguments.filter(a => typeof a == "string")[0]
        auth = Arguments.filter(a => typeof a == "boolean")[0]
        callback = Arguments.filter(a => typeof a == "function")[0]

        if (this.req.method === method) {
            if (path) {
                let url = this.#asPath(this.req.query)
                if (this.#verifySchema(url, path)) {
                    if (typeof auth == 'undefined') callback()
                    else if (auth) callback()
                }
            } else {
                if (typeof auth !== "boolean") callback()
                else if (auth) callback()
            }
        }
    }

    async get(path, auth, callback) {
        return this.#METHOD('GET', path, auth, callback)
    }
    async post(path, auth, callback) {
        return this.#METHOD('POST', path, auth, callback)
    }
    // start code
    #query() {
        let query = this.req.query
        let queryKeys = Object.keys(query)
        queryKeys.map(a => {
            if (typeof query[a] == "object") {
                delete query[a]
                return query = query
            }
        })
    }

    #asPath(object) {
        let queryKeys = Object.keys(object)
        let path = '';
        let queryParams = [];

        queryKeys.map((key) => {
            if (typeof object[key] == "object") {
                let value = object[key];
                if (Array.isArray(value)) path = '/' + value.join('/');
                else queryParams.push(`${key}=${value}`);
            }
        });

        if (queryParams.length > 0) path += '?' + queryParams.join('&');

        return path;
    }
    #verifySchema(url, schema) {
        var regex = schema.replace("[id]", "(\\d+)");
        var pattern = new RegExp("^" + regex + "$");
        var result = pattern.test(url);
        return result
    }
    // end code
    async Send(data, status = 200) {
        this.res.setHeader('Content-Type', 'application/json')
        this.res.status(status).json(data)
    }
} 