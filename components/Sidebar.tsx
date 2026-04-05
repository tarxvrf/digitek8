"use client"
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button Hamburger */}

      <button
        onClick={() => setOpen(true)}
        className="p-2 text-2xl md:hidden fixed top-0 z-50 w-full flex bg-black/30 opacity-50"
      >
        ☰
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900  text-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="p-4 text-xl"
        >
          ✕
        </button>

        {/* Menu */}
        <nav className="flex flex-col gap-4 p-4">
          <Link href={"/"} className="hover:text-gray-300">Home</Link>
          <Link href={""} className="hover:text-gray-300">Login</Link>
          <Link href={""} className="hover:text-gray-300">Register</Link>
          <Link href={"/contact"} className="hover:text-gray-300">Contact</Link>
        </nav>

      </aside>
    </>
  );
}