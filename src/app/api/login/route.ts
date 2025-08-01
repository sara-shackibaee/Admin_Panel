// مثال در API route یا اکشن لاگین:
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const { email, password } = await req.json();

 
  const token = 'user-token-xyz';

  (await cookies()).set('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24, 
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
