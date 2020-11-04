var appRouter = function (app) {
  app.get("/", function (req, res) {
    res.status(200).send("Look, Stef, i hit my fucking express API 2!");
  });
}

module.exports = appRouter;