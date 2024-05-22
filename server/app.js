const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const businessRouter = require("./routes/businessRouter");
const assistantRouter = require("./routes/assistantRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
  res.json({
    status: "successs",
    message: "Hello from server",
  });
});

app.use("/api/v1/business", businessRouter);
app.use("/api/v1/assistant", assistantRouter);

module.exports = app;
