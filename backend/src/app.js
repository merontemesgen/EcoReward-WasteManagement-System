const cors=require("cors");
const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");
const swaggerDocument = YAML.load(path.join(__dirname, "../docs/openapi.yaml"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(express.json());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // 20 login attempts per IP
  message: { message: "Too many requests, try again later" }
});
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200
});

app.use("/api/v1", apiLimiter);

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

app.get("/api/v1/health", (req, res) => {
  res.json({ status: "ok", app: "backend" });
});
app.use("/api/v1/auth", require("./modules/auth/auth.routes"));
app.use("/api/v1/users", require("./modules/users/users.routes"));
app.use("/api/v1/admin", require("./modules/admin/admin.routes"));
app.use("/api/v1/pickups", require("./modules/pickups/pickups.routes"));
app.use("/api/v1/sme", require("./modules/sme/sme.routes"));
app.use("/api/v1/pricing", require("./modules/pricing/pricing.routes"));
app.use("/api/v1/auth", authLimiter, require("./modules/auth/auth.routes"));
app.use("/api/v1", require("./modules/ledger/ledger.routes"));


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});


module.exports = app;

