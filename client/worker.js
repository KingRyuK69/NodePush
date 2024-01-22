console.log("Service Worker Loaded");

self.addEventListener("push", (e) => {
  try {
    const data = e.data.json();
    console.log("Push Received...");

    if (!data.title) {
      console.error("No title provided for the notification");
      return;
    }

    self.registration.showNotification(data.title, {
      body: "Notified by Sohom",
      icon: "C:NodePushimage.jpg",
    });
  } catch (error) {
    console.error("Error in push event listener:", error);
  }
});
