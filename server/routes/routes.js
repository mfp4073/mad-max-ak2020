
var appRouter = function (app) {
  const db = require('./queries')

  app.get("/", function (request, response) {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });

  app.get('/users', db.getUsers)
}

module.exports = appRouter;


