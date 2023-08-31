const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripeSecretKey =
  "sk_test_51NhaZqLFI9XgD2kKY2pMCoup8rIwyI2xbPw6MEnKv8v" +
  "PoIXNfSGWHxFYGo2O5GDgyD3ytqY7jKo5hYgdoJPawvh200JXxF2B5u";
const stripe = require("stripe")(stripeSecretKey);

// App config
const app = express();

// Middlewares
// prettier-ignore
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "AED",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Endpoint example
// (on terminal): firebase  emulators:start =>
// http function initialized (http://127.0.0.1:5001/clone-8795b/us-central1/api).
