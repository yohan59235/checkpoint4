// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const users = await tables.user.readAll();

    // Respond with the items in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (user === null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

const edit = async (req, res, next) => {
  const userInfos = {
    email: req.body.email,
    nickname: req.body.nickname,
    id: req.body.id,
  };

  try {
    const result = await tables.user.update(userInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "user introuvable" });
    } else {
      res.json({ msg: "user modifié avec succès" });
    }
  } catch (error) {
    next(error);
  }
};

// The A of BREAD - Add (Create) operation

const add = async (req, res, next) => {
  const userInfos = {
    email: req.body.email,
    hashedPassword: req.body.hashedPassword,
    nickname: req.body.nickname,
  };

  try {
    const result = await tables.user.create(userInfos);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

const destroy = async (req, res, next) => {
  try {
    const result = await tables.user.delete(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "user introuvable" });
    } else {
      res.json({ msg: "user supprimé avec succès" });
    }
  } catch (error) {
    next(error);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
