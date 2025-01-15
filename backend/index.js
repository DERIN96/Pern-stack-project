import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pkg from "pg";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const {Pool} = pkg;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// PostgreSQL connection
const pool = new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT
})

//Routes
app.get("/api/products",async (req,res) => {
    try {
        const result = await pool.query("SELECT * FROM products");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.post("/api/products" , async (req,res) => {
    try {
        const {name, description, price} = req.body;
        const result = await pool.query("INSERT INTO products (name, description, price) VALUES ($1,$2,$3) RETURNING *",
            [name, description, price]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.put("/api/products/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const {name, description, price} = req.body;
        const result = await pool.query("UPDATE products SET name=$1, description=$2, price=$3 WHERE id=$4 RETURNING *",
            [name, description, price, id]
        )
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message })
    }
})

app.delete("/api/products/:id", async (req,res) => {
    try {
        const {id} = req.params;
        await pool.query("DELETE FROM products WHERE id=$1", [id]);
        res.status(204).send(); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// Start server 
app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT))


