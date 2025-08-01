'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  return (
    <header className="bg-gray-400  shadow-md px-6 py-4 flex justify-between items-center rounded">
        <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        خروج
      </button>
      <h1 className="text-xl font-bold text-black">پنل مدیریتی</h1>
      
    </header>
  );
}
