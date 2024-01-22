import Image from "next/image";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Quote from "./components/Quote";
import Portofolio from "./components/Portofolio";
import Blog from "./components/Blog";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Slider />
      <Quote />
      <Portofolio />
      <Blog />
      <Connect />
      <Footer />
      <Copyright />
    </main>
  );
}
