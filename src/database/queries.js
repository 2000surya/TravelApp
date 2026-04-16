import db from "./db";

// ➕ Insert Entry
export const insertEntry = async (entry) => {
  try {
    await db.runAsync(
      `INSERT INTO entries 
      (title, description, photos, latitude, longitude, address, createdAt)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        entry.title,
        entry.description,
        JSON.stringify(entry.photos),
        entry.latitude,
        entry.longitude,
        entry.address,
        entry.createdAt,
      ],
    );
  } catch (error) {
    console.log("Insert error:", error);
  }
};

// 📋 Get All Entries
export const getEntries = async () => {
  try {
    const result = await db.getAllAsync("SELECT * FROM entries");

    return result.map((item) => ({
      ...item,
      photos: JSON.parse(item.photos),
    }));
  } catch (error) {
    console.log("Fetch error:", error);
    return [];
  }
};
