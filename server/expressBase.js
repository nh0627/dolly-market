const express = require('express')
const consola = require('consola')

require('dotenv').config()

class ExpressBase {

    constructor() {
        this.port = process.env.PORT
        this.host = process.env.HOST
        this.express = express
        this.app = express()
        this.router = express.Router()
        this.registerMiddlewares = this.registerMiddlewares.bind(this)
    }

    registerMiddlewares() {
        createError(500, 'Not Implemented')
    }

    run(isListenable = true) {
        this.registerMiddlewares()
        if (isListenable) this.listen()
    }

    listen() {
        const { host, port } = this

        // Listen the server
        this.app.listen({ port, host }, () => {
            consola.ready({
                message: `Server listening on http://${host}:${port}`,
                badge: true
            })
        })
    }
}

module.exports = ExpressBase