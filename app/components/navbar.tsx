"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="ml-20 text-4xl">Smart Agro</div>
            <ul className="hidden md:flex gap-x-8 text-white mr-12">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/routes/About">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/routes/Products">
                  <p>Our Products</p>
                </Link>
              </li>
              <li>
                <Link href="/routes/Projects">
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/routes/Services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/routes/News">
                  <p>News</p>
                </Link>
              </li>
              <li>
                <Link href="/routes/Contact">
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
