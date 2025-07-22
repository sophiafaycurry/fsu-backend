const bcrypt = require('bcrypt');
const db = require('./client'); // ✅ make sure this is AFTER any function declarations that use `db`

const SALT_ROUNDS = 10;

console.log("🚀 Seed script started");

async function seed() {
  try {
    console.log("🔧 Dropping and creating tables...");

    await db.query(`
      DROP TABLE IF EXISTS professors;
      DROP TABLE IF EXISTS departments;
      DROP TABLE IF EXISTS admins;

      CREATE TABLE departments (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        image_url TEXT,
        contact_info TEXT
      );

      CREATE TABLE professors (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE,
        bio TEXT,
        profile_image TEXT,
        department_id INTEGER REFERENCES departments(id)
      );

      CREATE TABLE admins (
        id SERIAL PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      );
    `);

    console.log("✅ Tables created");

    const deptRes = await db.query(`
      INSERT INTO departments (name, description, image_url, contact_info)
      VALUES 
        ('Computer Science', 'CS Dept', 'https://picsum.photos/200', 'cs@uni.edu'),
        ('Biology', 'Bio Dept', 'https://picsum.photos/201', 'bio@uni.edu')
      RETURNING *;
    `);

    console.log("✅ Departments inserted");

    const hashed = await bcrypt.hash('admin123', SALT_ROUNDS);
    await db.query(`
      INSERT INTO admins (username, password)
      VALUES ('admin', $1)
    `, [hashed]);

    console.log("✅ Admin inserted");

    await db.query(`
      INSERT INTO professors (name, email, bio, profile_image, department_id)
      VALUES 
        ('Dr. Alice', 'alice@uni.edu', 'AI expert', 'https://picsum.photos/301', ${deptRes.rows[0].id}),
        ('Dr. Bob', 'bob@uni.edu', 'Marine biology researcher', 'https://picsum.photos/302', ${deptRes.rows[1].id})
    `);

    console.log("✅ Professors inserted");
    console.log("🌱 Seed complete!");
  } catch (err) {
    console.error("❌ Seed failed:", err);
  } finally {
    db.end();
  }
}

seed();