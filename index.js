const express = require("express");
const { sendToGoogleAnalytics4 } = require("./lib/sendToGoogleAnalyticst");
const app = express();
const port = 3000;
require("dotenv").config();
//console.log(process.env);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/mock/deposit/", async (req, res) => {
  await sendToGoogleAnalytics4(
    process.env.MEASUREMENT_ID, // Your GA4 Measurement ID
    process.env.ANALYTICS_API_SECRET, // Your GA4 API Secret
    "deposit", // Event name
    {
      value: 10,
      currency: "USD",
      transaction_id:
        "0x7abe2c1bd21f4282cf2492575c5af53756576e27c67c9be7bb4201bc9154fe49",
      from: "0x7abe2c1bd21f4282cf2492575c5af53756576e27c67c9be7bb4201bc9154fe49",
      to: "0x7abe2c1bd21f4282cf2492575c5af53756576e27c67c9be7bb4201bc9154fe49",
    }
  );
  res.status(201).json({ message: "Deposit Mock Run Successfully." });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
