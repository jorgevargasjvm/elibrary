var admin = require("firebase-admin");
// Fetch the service account key JSON file contents
const serviceAccount = require("./key.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://icecream-4de07.firebaseio.com"
});

// var db = admin.database();

module.exports = admin;