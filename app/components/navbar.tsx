/** @format */
"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./navButton";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative">
      <div className="rounded-[1.2rem] border-[1px] border-[#197686] font-[JejuMyeongjo] px-[0.75rem] py-2 backdrop-blur-[2px] flex justify-between items-center mb-10">
        <div className="logo cursor-pointer" onClick={handleLogoClick}>
          <Link href={"/"}>
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </Link>
        </div>

        <div className="menu space-x-5 text-[#B3B3B3] lg:block hidden">
          <Link href="/">Events</Link>
          <Link href="/">My Tickets</Link>
          <Link href="/about">About Project</Link>
        </div>

        <div className="button">
          <Link href="/">
            <Button text="MY TICKETS " />
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="menu lg:hidden bg-[#197686] flex flex-col mt-1 p-5 rounded-lg absolute top-16 z-10 w-full font-[JejuMyeongjo] px-5 divide-y divide-white">
          <Link
            href="/"
            className="py-2 hover:bg-[#07373F] "
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/about"
            className="py-2 hover:bg-[#07373F]"
            onClick={() => setMenuOpen(false)}
          >
            My Tickets
          </Link>
          <Link
            href="/about"
            className="py-2 hover:bg-[#07373F]"
            onClick={() => setMenuOpen(false)}
          >
            About Project
          </Link>
        </div>
      )}
    </nav>
  );
}
