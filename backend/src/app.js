const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", app: "backend" });
});
app.use("/auth", require("./modules/auth/auth.routes"));
module.exports = app;

