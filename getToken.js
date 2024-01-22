const messaging = firebase.messaging();

messaging
  .getToken({ vapidKey: "your-public-vapid-key" })
  .then((currentToken) => {
    if (currentToken) {
      console.log("Token:", currentToken);
      // Send the token to your server and update the UI if necessary
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });
