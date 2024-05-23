
import express from 'express';
import cors from 'cors';
import pg from 'pg';
const { Pool } = pg;
const app = express();
const PORT = process.env.PORT || 8080;

// Create a PostgreSQL pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'All_Users',
  password: '@viru',
  port: 5432,
});

app.use(express.json());
app.use(cors())

// Define a route to handle inserting data into PostgreSQL
app.post('/All_Users', async (req, res) => {
  try {
    const client = await pool.connect(); // Wait for the client to connect
    console.log(req.body)
    const { fullname, phoneno, email, npwd, waddress, userid } = req.body;
    // Execute the insert query with the provided data
    await client.query('INSERT INTO users_data (fullname, phoneno, email, password, waddress, userid) VALUES ($1, $2, $3, $4, $5, $6)', [fullname, phoneno, email, npwd, waddress, userid]);
    client.release(); // Release the client back to the pool
    res.json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'An error occurred while inserting data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
