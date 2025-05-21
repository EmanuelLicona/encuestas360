import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import saltAndHashPassword from '@/lib/password';


export async function GET() {
  // const { email, password } = await req.json();

  // if (!email || !password) {
  //     return new Response(null, { status: 400 });
  // }

  const data = {
    email: "alico@gmail.com",
    password: "123456",
  }

  const isExists = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (isExists) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const user = await db.user.create({
    data: {
      email: data.email,
      password: await saltAndHashPassword(data.password),
    },
  });

  return NextResponse.json(user, { status: 201 });
}
