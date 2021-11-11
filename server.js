const express = require("express");
const path = require("path");
const compression = require("compression");
const { google } = require("googleapis");
const serviceAccount = require("./rental-clubrossignol-firebase-adminsdk.json");

// Define the required scopes
const scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/firebase.database",
];

// Authenticate a JWT client with the service account.
const jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  scopes
);

// Use the JWT client to generate an access token.
jwtClient.authorize(function (error, tokens) {
  if (error) {
    console.log("Error making request to generate access token:", error);
  } else if (tokens.access_token === null) {
    console.log(
      "Provided service account does not have permission to generate access tokens"
    );
  } else {
    const accessToken = tokens.access_token;
  }
});

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express(); // * use express node
const port = process.env.PORT || 5001; // * select port

app.use(compression());

app.use(express.json()); // * any of the requests will be converted to JSON

app.use(express.urlencoded({ extended: true })); // * make sure that URL strings do not contain spaces etc.

// app.use(cors()); // * check's to make sure that origin is the same (safety feature)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.post("/rental/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "ron",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
