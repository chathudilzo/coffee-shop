"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="py-3 flex justify-between items-center px-6 md:px-10">
        <div className="text-3xl [font-family:var(--font-clicker)]">
          Dilzo Plaza
        </div>
        <ul className=" hidden md:flex gap-5 items-center text-xs [font-family:var(--font-playfair)]">
          <li>
            {" "}
            <Link href={"/"} className="">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link href={"/menu"}>Menu</Link>
          </li>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact Us</Link>
          </li>
        </ul>

        <div className="hidden md:flex [font-family:var(--font-playfair)] gap-5 items-center ">
          <Link href={"/sign-in"} className="text-xs">
            Sign In
          </Link>
          <button className="bg-primary text-black text-sm p-2 rounded-3xl">
            Sign Up
          </button>
        </div>
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm text-white px-6 py-4 ">
          <Link
            href={"/"}
            onClick={() => setMobileMenuOpen(false)}
            className="block"
          >
            Home
          </Link>
          <Link
            className="block"
            href={"/menu"}
            onClick={() => setMobileMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            className="block"
            href={"/about"}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            className="block"
            href={"/contact"}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <hr className="border-white/20" />
          <Link
            className="block"
            href={"/sign-in"}
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href={"/signup"}
            onClick={() => setMobileMenuOpen(false)}
            className="block bg-white text-black font-semibold px-4 py-2 rounded mt-2"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
