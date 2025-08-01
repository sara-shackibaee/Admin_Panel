
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Header from "../common/header";
import Sidebar from "../common/sidebar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const cookieStore = await cookies(); 
  const token = cookieStore.get('token')?.value;

  if (!token) {
    redirect('/login');
  }

  return (
 
     <>
         <Header />
        <div className="min-h-screen flex flex-row-reverse  bg-gray-100">

     

     
         <Sidebar />
        {children}
    </div></>
   
  );
}
