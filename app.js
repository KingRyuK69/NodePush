const FCM = require("fcm-node");

const serverKey =
  "AAAA4bo3LGw:APA91bEp3FVPPn73Tlplcy1q-7Nn6FjAH4WoamDfIR1vNkom3x3ldor41i7hk0lrIcT_NtIVOlK-DXx34SJQnbHVcicscP_ECR5sLfigBgJYSSYNwKClrOgFN7pRcInsoB4Qj1mUuGcX";
const deviceToken =
  "cC67m4nLR-K3mq4ldcfcZA:APA91bGVd3jQvxXRzm7Pc0YcRifSXAF8KHxfzQ1Lz5yzyGuhyhv2XTWAITHYxNHt0H3VbIQBdkxXjjEYrtpAOo2n0EFt3QlheTLyNhJx6lIG_j6bqu2aDrMRUa4dt4D8vaxzzTpYL7WA";

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
