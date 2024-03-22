const express = require("express");

const router = express.Router();

const { hashPassword } = require("./services/auth");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/users", userControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to get user by id
router.get("/users/:id", userControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/users", hashPassword, userControllers.add);

// Route to update
router.put("/users/:id", userControllers.edit);

// Route to delete
router.delete("/users/:id", userControllers.destroy);

/* ************************************************************************* */

module.exports = router;
