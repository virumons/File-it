import express from 'express';
import cors from 'cors';
import pg from 'pg';

const { Pool }  = pg;
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'All_Users',
    password: '@viru',
    port: 5432,
});

