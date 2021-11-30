const express = require("express");
const path = require("path");
const compression = require("compression");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(stripe.paymentIntents);

const app = express(); // * use express node
const port = process.env.PORT || 5001; // * select port

app.use(compression());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/create-payment-intent", async (req, res) => {
  // const body = {
  //   source: req.body.token.id,
  //   amount: req.body.amount,
  //   currency: "ron",
  // };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "ron",
  });

  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });

  // stripe.charges.create(body, (stripeErr, stripeRes) => {
  //   if (stripeErr) {
  //     res.status(500).send({ error: stripeErr });
  //   } else {
  //     res.status(200).send({ success: stripeRes });
  //   }
  // });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

// const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://rental-clubrossignol.firebaseio.com",
// });

// app.post("/createToken", (req, res) => {
//   const uid = req.body.uid;

//   const additionalClaims = {
//     admin: true,
//   };

//   if (uid === "kum5QtEaWRM6CSYU78hEasBcwfp2") {
//     admin
//       .auth()
//       .createCustomToken(uid, additionalClaims)
//       .then((customToken) => {
//         res.json(customToken);
//       })
//       .catch((err) => console.log(err));
//   } else {
//     admin
//       .auth()
//       .createCustomToken(uid)
//       .then((customToken) => {
//         res.json(customToken);
//       })
//       .catch((err) => console.log(err));
//   }
// });
