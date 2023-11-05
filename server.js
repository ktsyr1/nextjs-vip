
export default class API {
    /**
    * Creates an instance of API.
    * @param {Object} req - The request object.
    * @param {Object} res - The response object.
    */
    constructor(req, res) {
        this.req = req
        this.res = res
        this.id = { _id: req.query._id }

        this.get = this.get.bind(this)
        this.post = this.post.bind(this)
        this.put = this.put.bind(this)
        this.delete = this.delete.bind(this)
        this.patch = this.patch.bind(this)
        this.all = this.all.bind(this)

        this.Send = this.Send.bind(this)

    }

    // Methods
    req = this.req
    res = this.res

    /**
     * Handles the HTTP method based on the provided method type.
     * @private
     * @param {string} method - The HTTP method type.
     * @param {Boolean} auth - The authentication function.
     * @param {Function} callback - The callback function.
     * @returns {Promise<void>} A promise that resolves when the operation is complete.
     */
    async #METHOD(method, auth, callback) {
        if (this.req.method === method) {
            if (auth) {
                if (typeof callback === "function") callback()
                else auth()
            }
        }
    }

    /**
     * Handles HTTP requests with the 'GET' method.
     * @param {Boolean} auth - The authentication function.
     * @param {Function} callback - The callback function.
     * @returns {Promise<void>} A promise that resolves when the operation is complete.
     */
    async get(auth, callback) {
        return this.#METHOD('GET', auth, callback)
    }

    /**
     * Handles HTTP requests with the 'POST' method.
     * @param {Boolean} auth - The authentication function.
     * @param {Function} callback - The callback function.
     * @returns {Promise<void>} A promise that resolves when the operation is complete.
     */
    async post(auth, callback) {
        return this.#METHOD('POST', auth, callback)
    }

    /**
     * Handles HTTP requests with the 'PUT' method.
     * @param {Boolean} auth - The authentication function.
     * @param {Function} callback - The callback function.
     * @returns {Promise<void>} A promise that resolves when the operation is complete.
     */
    async put(auth, callback) {
        return this.#METHOD('PUT', auth, callback)
    }

    /**
     * Handles HTTP requests with the 'DELETE' method.
     * @param {Boolean} auth - The authentication function.
     * @param {Function} callback - The callback function.
     * @returns {Promise<void>} A promise that resolves when the operation is complete.
     */
    async delete(auth, callback) {
        return this.#METHOD('DELETE', auth, callback)
    }

    /**
     * Handles HTTP requests with the 'PATCH' method.
     * @param {Boolean} auth - The authentication function. 
     * @param {Function} callback - The callback function.
     * @returns {Promise<void>} A promise that resolves when the operation is complete.
     */
    async patch(auth, callback) {
        return this.#METHOD('PATCH', auth, callback)
    }

    /**
     * Handles HTTP requests with the 'ALL' method.
     * @param {Boolean} auth - The authentication function.
     * @param {Function} callback - The callback function.
     * @returns {Promise<void>} A promise that resolves when the operation is complete.
     */
    async all(auth, callback) {
        return this.#METHOD('ALL', auth, callback)
    }

    // data manager
    id = this.id

    /**
     * Sends the response.
     * @param {any} data - The data to be sent.
     * @param {number} status - The status code of the response.
     */
    async Send(data, status = 200) {
        this.res.setHeader('Content-Type', 'application/json')
        this.res.setHeader('Access-Control-Allow-Origin', "*")
        this.res.setHeader('Access-Control-Allow-Credentials', true);
        this.res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        this.res.setHeader('X-Content-Type-Options', 'nosniff');
        this.res.setHeader('X-Frame-Options', 'DENY');
        this.res.setHeader('X-XSS-Protection', '1; mode=block');
        this.res.setHeader('Content-Security-Policy', "default-src 'self'"); // تعديل القيم حسب احتياجاتك
        this.res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
        this.res.setHeader('Referrer-Policy', 'no-referrer');

        this.res.status(status).json(data)

    }
} 