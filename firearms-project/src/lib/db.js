import mysql from 'mysql2/promise';

const globalForDb = global;

function createPool() {
  const host = process.env.DB_HOST || '127.0.0.1';
  const port = parseInt(process.env.DB_PORT || '3306', 10);
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD || '';
  const database = process.env.DB_NAME || 'firearms_db';

  if (process.env.DATABASE_URL) {
    return mysql.createPool(process.env.DATABASE_URL);
  }

  return mysql.createPool({
    host,
    port,
    user,
    password,
    database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

export const db = globalForDb.mysqlDb ?? createPool();

if (process.env.NODE_ENV !== 'production') {
  globalForDb.mysqlDb = db;
}
