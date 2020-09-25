import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_SCHEMA = process.env.DB_SCHEMA;

export default {
  server: {
    hostname: HOSTNAME,
    port: PORT
  },
  database: {
    db_user: DB_USER,
    db_pass: DB_PASS,
    db_schema: DB_SCHEMA,
  }
}
