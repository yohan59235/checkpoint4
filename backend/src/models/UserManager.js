const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(userInfos) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (email, hashed_password, nickname) VALUES (?,?,?)`,
      [userInfos.email, userInfos.hashedPassword, userInfos.nickname]
    );
    return result.addUser;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select nickname, email from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select id, email, hashed_password, nickname from ${this.table}`
    );

    // Return the array of items
    return rows;
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email=?`,
      [email]
    );
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(userInfos) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET email=?, nickname=? WHERE id=?`,
      [userInfos.email, userInfos.nickname, userInfos.id]
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

module.exports = UserManager;
