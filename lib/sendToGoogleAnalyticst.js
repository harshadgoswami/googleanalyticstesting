const { default: axios } = require("axios");
const { v4: uuidv4 } = require("uuid");

async function sendToGoogleAnalytics4(
  measurementId,
  apiSecret,
  eventName,
  params
) {
  const clientId = uuidv4(); // Unique client identifier

  const payload = {
    client_id: clientId,
    events: [
      {
        name: eventName,
        params: {
          ...params,
          debug_mode: 1,
        },
      },
    ],
  };

  try {
    const response = await axios.post(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      payload
    );

    console.log({
      url: `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      payload,
    });
    console.log("Event sent successfully:", response.status);
  } catch (error) {
    console.error("Failed to send event:", error);
  }
}

module.exports = { sendToGoogleAnalytics4 };
