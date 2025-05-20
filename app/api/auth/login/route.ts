

import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';


export async function POST(req: Request) {

  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response(null, { status: 400 });
  }

  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    return new Response(null, { status: 400 });
    // return NextResponse.json({ message: "User not found" }, { status: 400 });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return new Response(null, { status: 400 });
    // return NextResponse.json({ message: "Incorrect password" }, { status: 400 });
  }

  const token = await bcrypt.hash(user.email, 10);

  return NextResponse.json({ token });
}