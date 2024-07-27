import React from "react";
import logo from "../../public/logo.png";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="pt-3 bg-primary">
      <div className="container flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <Image src={logo} width={40} height={40} alt="logo" />
          <h3 className="font-bold text-white text-lg">Aviafly</h3>
        </div>
        <ul className="flex gap-10 text-white ml-20">
          <li>
            <Link href={"/service"}>Service</Link>
          </li>
          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="flex gap-3">
          <button className="py-[1px px-8 text-white border-solid border-white border rounded-3xl">
            Log in
          </button>
          <button className="py-[1px] px-8 text-primary bg-white border-solid border-white border rounded-3xl">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
