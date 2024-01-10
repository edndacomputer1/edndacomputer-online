import Main from "@/app/components/Section";

// import Cards from "./components/Cards";
import MainCards from "./components/MainCards";

export default function Home() {
  return (
    <div className='bg-[#111111]'>
      <Main />
      <MainCards />
      {/* <Cards /> */}
    </div>
  );
}
