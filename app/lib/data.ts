import { sql } from "@vercel/postgres";
import { todo } from "./definition";
export async function gettodos() {
  try {
    const data = await sql<todo>`SELECT * FROM todo`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
