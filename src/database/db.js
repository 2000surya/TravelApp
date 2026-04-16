import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("journal.db");

export const initDB = async () => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS entries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        photos TEXT,
        latitude REAL,
        longitude REAL,
        address TEXT,
        createdAt TEXT
      );
    `);

    console.log("Database initialized");
  } catch (error) {
    console.log("DB Error:", error);
  }
};

export default db;
