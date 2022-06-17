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

app.get("*", (req, res) => {
  res.status(500).json({
    error: "The conversion url template is : DOMAIN.EXTENTION/FORMAT_OF_UNCONVERTED_VALUE/FORMAT_OF_CONVERTED_VALUE/VALUE_TO_CONVERT : e.g. DOMAIN.EXTENTION/10/16/1515 -> convert 1515 in base 10 (dec) to base 16 (hex) = 5eb",
    bases: {
      "2": "binary",
      "8": "octal",
      "10": "decimal",
      "16": "hexadecimal"
    }
  })
});

// Listening on port 6060
app.listen(PORT, PATH, () => {
  console.log(`Running in http://${PATH}:${PORT}/`);
}); // Development
// app.listen(6060, "0.0.0.0"); // Production
