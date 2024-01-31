import Slider from "../../_components/slider";
import Categories from "../../_components/categories";
import Products from "../../_components/products";
import Services from "../../_components/services";
import Footer from "@/app/_components/footer";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <Categories />
      <Products />
      <Services />
      <Footer />
    </main>
  );
}
