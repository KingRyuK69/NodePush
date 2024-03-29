const FCM = require("fcm-node");
require("dotenv").config();

const serverKey = process.env.SERVER_KEY;
const deviceToken = process.env.DEVICE_TOKEN;

const fcm = new FCM(serverKey);

const message = {
  to: deviceToken,
  notification: {
    title: "Push Notification by Sohom",
    body: "Hello there, Sohom here",
  },
};

fcm.send(message, function (err, res) {
  if (err) {
    console.log("Error sending message:", err);
  } else {
    console.log("Message sent successfully:", res);
  }
});
