const AbstractManager = require("./AbstractManager");

class PublishManager extends AbstractManager {
  constructor() {
    super({ table: "publish" });
  }

  // The C of CRUD - Create operation

  async create(publishInfos) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (image, description, id_user) VALUES (?,?,?)`,
      [publishInfos.image, publishInfos.description, publishInfos.id_user]
    );
    return result.addPublish;
  }

  // The Rs of CRUD - Read operations

  async read(userId) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id_user = ?`,
      // `SELECT publish.description, publish.image FROM ${this.table} WHERE id_user = ?`,
      [userId]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `SELECT publish.*, user.nickname AS user_nickname FROM ${this.table} INNER JOIN user ON publish.id_user = user.id`
    );

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(publish) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET image=?, description=? WHERE id=?`,
      [publish.image, publish.description, publish.id]
    );
    return rows;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows;
  }
}

module.exports = PublishManager;
