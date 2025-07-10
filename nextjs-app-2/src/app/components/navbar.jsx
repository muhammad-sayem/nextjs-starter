import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-around">
          <li> <Link href='/'> Home </Link> </li>
          <li> <Link href='/posts'> Posts </Link> </li>
          <li> <Link href='/meals'> Meals </Link> </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;