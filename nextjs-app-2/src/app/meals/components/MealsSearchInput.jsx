"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealsSearchInput = () => {
  // const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  // console.log("From pathname: ", pathname);

  useEffect(() => {
    const searchQuery = { search: search }; // searchQuery = { search: "chicken" }
    const urlQueryParam = new URLSearchParams(searchQuery); // urlQueryParam = "search=chicken"
    const url = `${pathname}?${urlQueryParam}`; // url = "/meals?search=chicken"
    router.push(url)
  }, [search]);

  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search here"
        type="text"
        className="border border-black w-1/2 p-2 my-2 rounded-lg" />
    </div>
  );
};

export default MealsSearchInput;