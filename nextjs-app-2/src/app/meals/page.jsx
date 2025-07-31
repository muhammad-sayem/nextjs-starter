import Image from "next/image";
import MealsSearchInput from "./components/MealsSearchInput";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "All Meals",
  description: "Loading Meals from MealDB using server component",
};

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
})

const MealsPage = async ({ searchParams }) => {
  const query = await searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
      const data = await res.json();
      // setMeals(data?.meals || []);
      return data?.meals || [];
    }
    catch (error) {
      console.log(error);
      return [];
    }
  }

  const meals = await fetchMeals();
  console.log("All Meals", meals);

  return (
    <div>
      <p className="text-red-500 text-center font-bold text-3xl"> Total Meals: </p>
      <p className="text-xl font-bold"> Search </p>

      <MealsSearchInput />

      <div className="grid grid-cols-4 gap-4">
        {
          meals.map(meal => {
            return (
              <div key={meal?.idMeal} className={`border border-red-500 p-4 ${roboto.className}`}>
                <Image 
                src={meal?.strMealThumb} 
                width={250}
                height={120}
                alt="Meal Image" />
                <p> Meal ID: {meal?.idMeal} </p>
                <p className="text-green-500 font-bold"> Meal Name: {meal?.strMeal} </p>
                <p> {meal?.strInstructions} </p>
              </div>
            )
          })
        }
      </div>

    </div>
  );
};

export default MealsPage;