const express = require("express");
const csrf = require("csurf");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const cookieParser = require("cookie-parser");

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //   databaseURL:
});

const csrfMiddleware = csrf({ cookie: true });

app.use(cookieParser());
// app.use(csrfMiddleware);
app.use(bodyParser.json());

// app.all("*", (req, res, next) => {
//   res.cookie("XSRF-TOKEN", req.csrfToken());
//   next();
// });

app.post("/sessionLogin", (req, res) => {
  const idToken = req.body.idToken.toString();

  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then(
      (sessionCookie) => {
        const options = { maxAge: expiresIn, httpOnly: true };
        res.cookie("session", sessionCookie, options);
        res.end(JSON.stringify({ status: "success" }));
      },
      (error) => {
        res.status(401).send("UNAUTHORIZED REQUEST");
      }
    );
});

app.get("/profile", (req, res) => {
  const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true)
    .then(res.redirect("/rental/dashboard"))
    .catch((err) => {
      res.redirect("/rental");
    });
});

app.post("/sessionLogout", (req, res) => {
  res.clearCookie("session");
  res.redirect("/rental");
});

app.listen(3333, () => console.log("App is running on port 3333"));
