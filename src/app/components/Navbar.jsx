import Link from "next/link";
import React from "react";

const Navbar = () => {
  return <nav className='border-b flex items-center justify-between px-[50px] w-full h-[70px]'>
  <div className="logo">
    <Link href={'/'}>Logo</Link>
  </div>

  <div className="space-x-4">
    <Link href={'/users'}>User</Link>
    <Link href={'/admin'}>Admin</Link>
  </div>
</nav>
};

export default Navbar;
