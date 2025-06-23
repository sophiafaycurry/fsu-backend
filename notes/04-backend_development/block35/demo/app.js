import express from "express";
const app = express();
export default app;

import pg from "pg";
const db = new pg.Client(
  process.env.DATABASE_URL || "postgres://lawrenceml@localhost:5432/demo35"
  /* for windows and mac, use this connection
    "postgres://user:password@localhost/demo"
  */
);

// Connect to the database
db.connect()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Database connection error:", err));

app.use(express.json());

// GET / to send the message "Hello world!"
app.route("/").get((request, response) => {
  response.send("Hello world!");
});

// GET
app.route("/api/customers").get(async (req, res) => {
  try {
    const sql = `SELECT * FROM customers`;
    const { rows: customers } = await db.query(sql);
    res.json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ error: "Failed to fetch customers" });
  }
});

// POST
app.route("/api/customers").post(async (req, res) => {
  try {
    const { first_name, last_name, age } = req.body;
    const sql = `
      INSERT INTO customers (first_name, last_name, age)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const {
      rows: [customer],
    } = await db.query(sql, [first_name, last_name, age]);
    res.status(201).json(customer);
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "Failed to create customer" });
  }
});

// PUT
app.route("/api/customers/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name } = req.body;
    const sql = `
      UPDATE customers
      SET
        first_name = $2,
        last_name = $3
      WHERE id = $1
      RETURNING *
    `;
    const {
      rows: [customer],
    } = await db.query(sql, [id, first_name, last_name]);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    console.error("Error updating customer:", error);
    res.status(500).json({ error: "Failed to update customer" });
  }
});

// DELETE
app.route("/api/customers/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `
      DELETE FROM customers
      WHERE id = $1
      RETURNING *
    `;
    const {
      rows: [customer],
    } = await db.query(sql, [id]);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    console.error("Error deleting customer:", error);
    res.status(500).json({ error: "Failed to delete customer" });
  }
});
