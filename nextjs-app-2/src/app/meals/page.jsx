"use client";
import { useEffect, useState } from "react";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState('');
  console.log(search);

  const fetchMeals = async () => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const data = await res.json();
      setMeals(data?.meals || []);
      // return data.meals;
    }
    catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(()=>{
    fetchMeals();
  }, [search]);

  return (
    <div>
      <p className="mb-2 text-xl font-bold"> Search </p>
      <div className="mb-6">
        <input placeholder="Search here" className="border w-1/2 mx-auto p-2 rounded-lg" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <p> All meals: {meals.length} </p>
      <div className="space-y-4">
        {
          meals?.map(meal => {
            return <div key={meal.idMeal} className="border p-4">
              <p className="text-xl text-red-500 font-bold"> {meal?.strMeal} </p>
              <p> {meal?.strInstructions} </p>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default MealsPage;