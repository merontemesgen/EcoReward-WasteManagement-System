const cors=require("cors");
const express = require("express");
const app = express();

app.use(express.json());

const allowedOrigins = ["http://localhost:3000", "http://ecoreward.vercel.app"];
app.use(
  cors({
  origin: function (origin, callback) {
      // allow requests with no origin (like curl, Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  })
);

app.get("/health", (req, res) => {
  res.json({ status: "ok", app: "backend" });
});
app.use("/auth", require("./modules/auth/auth.routes"));
app.use("/users", require("./modules/users/users.routes"));
app.use("/admin", require("./modules/admin/admin.routes"));
app.use("/pickups", require("./modules/pickups/pickups.routes"));
module.exports = app;

