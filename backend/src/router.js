const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const publishControllers = require("./controllers/publishControllers");
const authControllers = require("./controllers/authControllers");

const authMiddlewares = require("./services/auth");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/users", userControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to get user by id
router.get("/users/:id", userControllers.read);

// Route to login / logout
router.post("/login", authControllers.login);
router.delete("/logout", authControllers.disconnected);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/users", authMiddlewares.hashPassword, userControllers.add);
router.post("/publish", authMiddlewares.verifyToken, publishControllers.add);

// Route to update
router.put("/users/:id", userControllers.edit);

// Route to delete
router.delete("/users/:id", userControllers.destroy);

/* ************************************************************************* */

module.exports = router;
