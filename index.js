const express = require("express");
const { sendToGoogleAnalytics4 } = require("./lib/sendToGoogleAnalyticst");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/mock/deposit/", async (req, res) => {
  await sendToGoogleAnalytics4(
    process.env.NEXT_PUBLIC_ANALYTICS_CODE, // Your GA4 Measurement ID
    process.env.ANALYTICS_API_SECRET, // Your GA4 API Secret
    "deposit", // Event name
    {
      value: 10,
      currency: "USD",
      transaction_id: "02D3xjsdf234",
      from: "324sdfsdf",
      to: "02D3xjsdf234",
    }
  );
  res.status(201).json({ message: "Deposit Mock Run Successfully." });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
