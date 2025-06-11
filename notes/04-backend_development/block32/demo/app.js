import express from "express";
const app = express();
export default app;
import { getNumbers, addNumber } from "./db/numbers.js";

// import numbersRouter from ./api/numbers.js

// Preprocessing middleware = middleware that goes before all of your route handlers

// We need to tell Express to look at the request body
// Body-parsing middleware
// This tells Express to parse and read JSON request bodies

// Logging middleware = just log all of the requests that come through
// `app.use` means use this middleware for all requests (app-level middleware)
// `next` is a function that means: pass the request to the next middleware

// GET / to send the message "Hello world!"
app.route("/").get((req, res) => {
  res.send("Hello world!");
});

// Use numbersRouter as the middleware for the /numbers route
// This will prepend "/numbers" to all the routes in numbersRouter!

app.route("/numbers").get((req, res) => {
  const numbers = getNumbers();
  res.send(numbers);
});

// GET /numbers/:num sends true/false if num exists
app.route("/numbers/:num").get((req, res) => {
  const numbers = getNumbers();
  const { num } = req.params;

  if (!numbers.includes(+num)) {
    return res.status(404).send(false);
  }

  res.send(true);
});

// Error-handling middleware should go AFTER all routing middleware
// Calling next(e) with an argument / error will skip directly to this one
// 4 parameters is how Express defines it as the error-handling middleware
