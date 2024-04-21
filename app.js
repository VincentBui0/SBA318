// Importing the 'express' framework for creating the web application
import express from "express";
// Importing 'body-parser' middleware for parsing incoming request bodies
import bodyParser from "body-parser";

// Importing the router module from a separate file
import router from "./router.js";

// Creating an instance of the Express application
const app = express();
// Defining the port number for the server to listen on
const PORT = 5000;

// Adding middleware to parse JSON bodies of incoming requests
app.use(bodyParser.json());

// Mounting the router middleware at the '/people' endpoint
app.use("/people", router);
// Setting up a route for the root URL ('/') to send a welcome message
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
// Setting up a catch-all route to handle requests to undefined routes
app.all("*", (req, res) => res.send("You've tried reaching a route that doesn't exist."));

// Starting the server to listen on the specified port
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
