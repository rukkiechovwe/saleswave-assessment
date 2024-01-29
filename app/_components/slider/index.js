import Image from "next/image";
import slide from "@/app/_assets/images/slide.png";

export default function Slider() {
  return (
    <section className="pt-10 pb-[140px]">
      <div className="container">
        <Image src={slide} alt="" />
      </div>
    </section>
  );
}
