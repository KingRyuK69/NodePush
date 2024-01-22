const FCM = require("fcm-node");

const serverKey = " ";
const fcm = new FCM(serverKey);

const message = {
  notification: {
    title: "Push_App Test",
    body: "Hello there, Sohom here!",
  },
  to: " ",
};

fcm.send(message, function (err, res) {
  if (err) {
    console.log("There is an error sending message:", err);
  } else {
    console.log("Sent Successfully:", res);
  }
});
