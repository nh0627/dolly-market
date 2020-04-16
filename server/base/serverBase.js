const express = require("express")
const consola = require("consola")
const createError = require("http-errors")

require("dotenv").config()

class ServerBase {
  constructor() {
    this.isListenable = true
    this.port = process.env.PORT
    this.host = process.env.HOST
    this.app = express()
    this.router = express.Router()
    this.express = express
    this.registerMiddlewares = this.registerMiddlewares.bind(this)
    this.registerRoutes = this.registerRoutes.bind(this)
  }

  registerMiddlewares() {
    throw new createError(500, "Not Implemented")
  }

  registerRoutes() {
    if (this.routes) throw new createError(500, "Not Implemented")
  }

  run() {
    this.registerMiddlewares()
    if (this.routes) this.registerRoutes()
    if (this.isListenable) this.listen()
  }

  listen() {
    const { host, port } = this

    // Listen the server
    this.app.listen({ port, host }, () => {
      consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true,
      })
    })
  }
}

module.exports = ServerBase
