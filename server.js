const express = require("express");
const path = require("path");
const compression = require("compression");
// const admin = require("firebase-admin");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://rental-clubrossignol.firebaseio.com",
// });

if (process.env.NODE_ENV !== "production") require("dotenv").config();

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

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
