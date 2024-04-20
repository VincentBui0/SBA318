// Importing the 'express' framework for creating a router
import express from 'express';

// Importing controller functions for handling different routes
import { getUsers, createUser, getUser, deleteUser, updateUser } from "./controller.js";

// Creating an instance of the Express router
const router = express.Router();

// Defining routes and associating them with controller functions
router.get('/', getUsers);         // GET route to fetch all users
router.post('/', createUser);       // POST route to create a new user
router.get('/:id', getUser);        // GET route to fetch a user by ID
router.delete('/:id', deleteUser);  // DELETE route to delete a user by ID
router.patch('/:id', updateUser);   // PATCH route to update a user by ID

// Exporting the router to be used in other modules
export default router;
