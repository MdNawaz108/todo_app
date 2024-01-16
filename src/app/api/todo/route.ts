// import { NextResponse } from "next/server";
// import { db, usersTable } from "@/app/lib/drizzle";
// export async function GET() {
//   const selectResult = await db.select().from(usersTable);
//   return NextResponse.json(selectResult);
// }

import { NextRequest, NextResponse } from "next/server";
import { db, usersTable, newTodo, todo } from "@/app/lib/drizzle";
export async function GET() {
  const users = await db.select().from(usersTable);
  return NextResponse.json(users);
}
export async function POST(request: NextRequest) {
  try {
    db.insert(usersTable)
      .values({ name: "ali", email: "al@gmail.com" })
      .returning();

    return NextResponse.json("data inserted successfully");
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}
