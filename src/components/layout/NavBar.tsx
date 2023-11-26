/** @format */
import Link from "next/link";
import React from "react";

export const NavBar = ({ children }: any) => {
  return (
    <div className="w-full h-screen flex flex-row items-center">
      <div className="w-[200px] max-w-full h-full bg-red-500">
        <Link href="/app/home">Home</Link>
        <Link href="/app/products">Products</Link>
      </div>
      {children}
    </div>
  );
};
