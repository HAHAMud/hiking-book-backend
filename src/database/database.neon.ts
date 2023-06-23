const { Pool } = require('pg');
require('dotenv').config();

const { DATABASE_URL } = process.env;

const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

export async function getPostgresVersion() {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT version()');
        console.log(res.rows[0]);
    } finally {
        client.release();
    }
}

