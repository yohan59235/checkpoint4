// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const publishes = await tables.publish.readAll();

    // Respond with the items in JSON format
    res.json(publishes);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const getPublicationsByUserId = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const userPublications = await tables.publish.getUserPublications(userId);
    res.json(userPublications);
  } catch (error) {
    next(error);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

const edit = async (req, res, next) => {
  const publishInfos = {
    image: req.body.image,
    description: req.body.description,
    id: req.params.id,
  };

  try {
    const result = await tables.publish.update(publishInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "publication introuvable" });
    } else {
      res.json({ msg: "publication modifié avec succès" });
    }
  } catch (error) {
    next(error);
  }
};

// The A of BREAD - Add (Create) operation

const add = async (req, res, next) => {
  const publishInfos = {
    image: req.body.image,
    description: req.body.description,
    id_user: req.body.id_user,
  };

  console.info("publish infos", publishInfos);

  try {
    const result = await tables.publish.create(publishInfos);
    res.status(200).json({ "la publication a bien été postée": result });
  } catch (error) {
    next(error);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

const destroy = async (req, res, next) => {
  try {
    const result = await tables.publish.delete(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "publication introuvable" });
    } else {
      res.json({ msg: "publication supprimée avec succès" });
    }
  } catch (error) {
    next(error);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  getPublicationsByUserId,
  edit,
  add,
  destroy,
};
