let users = [
  { id: 1, name: 'سارا شکیبایی', email: 'sara@example.com' },
  { id: 2, name: 'علی رضایی', email: 'ali@example.com' },
  { id: 3, name: 'مریم حسینی', email: 'maryam@example.com' },
  { id: 4, name: 'رضا احمدی', email: 'reza@example.com' },
  { id: 5, name: 'ناهید کریمی', email: 'nahid@example.com' },
  { id: 6, name: 'امیر نادری', email: 'amir@example.com' },
  { id: 7, name: 'زهرا موسوی', email: 'zahra@example.com' },
  { id: 8, name: 'محمد جوادی', email: 'mohammad@example.com' },
  { id: 9, name: 'سمیه زمانی', email: 'somayeh@example.com' },
  { id: 10, name: 'حسین مرادی', email: 'hossein@example.com' },
];

import { NextResponse } from 'next/server';



export async function GET() {
  return NextResponse.json(users);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const idParam = searchParams.get('id');
  if (!idParam) {
    return NextResponse.json({ message: 'شناسه کاربر لازم است' }, { status: 400 });
  }

  const id = Number(idParam);
    users = users.filter(user => user.id !== id);
    console.log(users ,'userrrrsss')
  return NextResponse.json({ message: `کاربر با شناسه ${id} حذف شد.` });
}

export async function PUT(request: Request) {

  
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json({ message: 'نام و ایمیل اجباری هستند.' }, { status: 400 });
    }

    const newUser = {
      id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
      name,
      email,
    };

    users.push(newUser);

    return NextResponse.json({ message: 'کاربر با موفقیت اضافه شد.', user: newUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'خطا در افزودن کاربر.' }, { status: 500 });
  }
}