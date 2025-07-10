"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname, pathname.includes('dashboard'));
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav>
          <ul className="flex justify-evenly">
            <li>
              <Link href='/'> Home </Link>
            </li>
            <li>
              <Link href='/services'> Services </Link>
            </li>
            <li>
              <Link href='/about'> About </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  else{
    return <></>;
  }

};

export default Navbar;