// Modules
const express = require("express");
const bodyParser = require("body-parser");
// Functions
const { convert } = require("./conversion");
// Configuration
const app = express();
let PATH = "127.0.0.1";
let PORT = 6060;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/:from/:to/:value", (req, res) => {
  console.log(req.params);
  let converted = convert(
    req,
    req.params.value,
    req.params.from,
    req.params.to
  );
  try {
    res.status(200).json({
      value: converted.v,
      from: converted.from,
      to: converted.to,
      res: converted.res,
    });
  } catch (error) {
    res.status(500).json({ error: error || converted.error });
  }
});

// Listening on port 6060
app.listen(PORT, PATH, () => {
  console.log(`Running in http://${PATH}:${PORT}/`);
}); // Development
// app.listen(6060, "0.0.0.0"); // Production
