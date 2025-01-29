// import Image from "next/image";
import Home0 from "./components/(home)/(heroSection)/home0";
import Home1 from "./components/(home)/(heroSection)/home1";
import Home2 from "./components/(home)/(heroSection)/home2";
import Costumer from "./components/(home)/(costumer)/costumer";
export default function Home() {
  return (
    <div >
      <main className="w-[95%] 2xl:w-[1440px] mx-auto">
        <Home0/>
        <Home1/> 
        <Home2/>
        <Costumer/>

      </main>
    </div>
  );
}
