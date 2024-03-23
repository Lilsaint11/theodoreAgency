import Image from "next/image";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Examples from "./components/examples";
import Footer from "./components/footer";
import Header from "./components/header";
import Reviews from "./components/reviews";
import Services from "./components/services";
import WhyUs from "./components/whyUs";

export default function Home() {
  return (
   <div className="w-full flex flex-col gap-24 max-md:gap-5">
     <div className="main-banner sm:h-full  py-5 w-full px-20 max-[1100px]:px-10 max-[780px]:px-5">
      <Header />
      <Banner />
     </div>
     <div className=" flex flex-col gap-24 max-md:gap-12 py-5 px-20  max-[1100px]:px-10 max-[780px]:px-5">
      <Services />
      <WhyUs />
      <Reviews />
      <Examples />
      <Contact />
      <Footer />
     </div>
   </div>
  );
}
