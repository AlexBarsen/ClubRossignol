const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

const calcluateOrderAmount = (items) => {
  const total = items.reduce(
    (accumulatedTotal, item) => accumulatedTotal + item.price * item.days,
    0
  );

  return total;
};

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { items } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: calcluateOrderAmount(items) * 100,
      currency: "ron",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
