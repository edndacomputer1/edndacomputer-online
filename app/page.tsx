import Main from "@/app/components/Section";

// import Cards from "./components/Cards";
import MainCards from "./components/MainCards";
import Location from "./components/Location";

export default function Home() {
  return (
    <div className="bg-[#111111]">
      <Main />
      <MainCards />
      {/* <Cards /> */}

      <Location />
    </div>
  );
}
