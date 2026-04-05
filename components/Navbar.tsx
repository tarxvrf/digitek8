"use client"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10 px-8 py-4 md:flex hidden md:justify-between">
      <h1 className="text-blue-500 font-bold">Digitek8</h1>
      <div className="flex gap-6 text-sm">
       <Link href={"/"}>Home</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
}