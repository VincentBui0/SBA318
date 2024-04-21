// Importing the 'uuid' package to generate unique identifiers
import { v4 as uuid } from 'uuid';

// Initializing an empty array to store user data
let users = [];

// Controller function to handle GET request for fetching all users
export const getUsers = (req, res) => {
    // Logging the current users in the database
    console.log(`Users in the database: ${users}`);

    // Sending the array of users as the response
    res.send(users);
}

// Controller function to handle POST request for creating a new user
export const createUser = (req, res) => {   
    // Extracting user data from the request body
    const user = req.body;

    // Generating a unique identifier for the user using 'uuid'
    users.push({...user, id: uuid()});
    
    // Logging the addition of a new user to the database
    console.log(`User [${user.username}] added to the database.`);
};

// Controller function to handle GET request for fetching a user by ID
export const getUser = (req, res) => {
    // Sending the user ID as the response
    res.send(req.params.id)
};


// Controller function to handle DELETE request for deleting a user by ID
export const deleteUser = (req, res) => { 
    // Logging the deletion of a user with the specified ID
    console.log(`User with ID ${req.params.id} has been deleted`);
    
    // Filtering out the user with the specified ID from the 'users' array
    users = users.filter((user) => user.id !== req.params.id);
};

// Controller function to handle PATCH request for updating a user by ID
export const updateUser =  (req, res) => {
    // Finding the user with the specified ID
    const user = users.find((user) => user.id === req.params.id);
    
    // Updating the user's username and age with the new values from the request body
    user.username = req.body.username;
    user.age = req.body.age;

    // Logging the update of the user's username and age
    console.log(`Username has been updated to ${req.body.username}. Age has been updated to ${req.body.age}`);
};
