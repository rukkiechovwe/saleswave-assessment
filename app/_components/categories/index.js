import Image from "next/image";

import category_slide from "@/app/_assets/images/category_slide.png";
import SectionHeader from "../ui/sectionHeader";

export default function Categories() {
  return (
    <section className="pb-[140px]">
      <div className="container space-y-[70px]">
        <div className="pb-[132px] border-b border-solid border-neutral-80 space-y-[60px]">
          <SectionHeader title="Categories" description="Browse By Category" />

          <div></div>
        </div>
        <Image src={category_slide} alt="" />
      </div>
    </section>
  );
}
