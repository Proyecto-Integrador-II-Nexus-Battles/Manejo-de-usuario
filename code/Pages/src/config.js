import { config } from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config({ path: path.resolve(__dirname, '../.env') });

export const PORT = process.env.PORT || 5000;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_DATABASE = process.env.DB_DATABASE || 'cimed_inv';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'sofia';