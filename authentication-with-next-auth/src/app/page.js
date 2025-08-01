import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <div className="w-10/12 mx-auto my-6">
      <p className="text-5xl font-bold text-sky-500"> This is home page </p>
      <LoginButton />
    </div>
  );
}
