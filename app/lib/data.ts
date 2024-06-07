import { sql } from "@vercel/postgres";
import { todo } from "./definition";

export async function gettodos() {
  try {
    const data = await sql<todo>`SELECT * FROM todo`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}

export async function updatetodos({ id, done }: { id: number; done: boolean }) {
  try {
    await sql`UPDATE todo SET done = ${!done} Where id = ${id}`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to update data.");
  }
}
