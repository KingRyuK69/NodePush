const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
require("colors");

//set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = PUBLIC_VAPID_KEY;

const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails(
  "mailto:sohom.neogi@shyamsteel.com",
  publicVapidKey,
  privateVapidKey
);

//Subscribe Route
app.post("/subscribe", (req, res) => {
  //Get pushSubscription object
  const subscription = req.body;

  //send 201 status - resource created
  res.status(201).json({
    status: "Created Successfully",
  });

  //create a payload(optional)
  const payload = JSON.stringify({ title: "Push Test" });

  //pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});

const port = 5000;

app.listen(port, () =>
  console.log(`Server started on port ${port}`.bold.underline.bgCyan)
);
