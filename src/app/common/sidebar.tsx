"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-gray-400 text-white shadow-lg p-6">
    
      <ul className="space-y-3">
        <li>
          <Link
            href="/main/dashbord"
            className={`block px-4 py-2 rounded-md text-center transition-all duration-200 hover:bg-gray-200 ${
              pathname === "/main/dashbord" ? "bg-gray-200" : ""
            }`}
          >
            داشبورد
          </Link>
        </li>
        <li>
          <Link
            href="/main/users"
            className={`block px-4 py-2 text-center rounded-md transition-all duration-200 hover:bg-gray-200 ${
              pathname === "/main/users" ? "bg-gray-200" : ""
            }`}
          >
            کاربران
          </Link>
        </li>
      </ul>
    </aside>
  );
}
