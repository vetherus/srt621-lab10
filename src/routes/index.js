const { Router } = require("express");
const routes = new Router();
const handlers = require("../controllers/books.controller");
routes.post('/books', handlers.create);
routes.all("*", (req, res, next) =>
  next()
);

module.exports = routes;
