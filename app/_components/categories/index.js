import SectionHeader from "../ui/sectionHeader";
import categories from "@/app/_utils/data/categories";
import Card from "./card";
import Ad from "./ad";

export default function Categories() {
  return (
    <section className="pb-[140px]">
      <div className="container space-y-[70px]">
        <div className="pb-[132px] border-b border-solid border-neutral-80 space-y-[60px]">
          <SectionHeader title="Categories" description="Browse By Category" />

          <div className="flex gap-[30px]">
            {categories.map((category) => (
              <Card
                key={category.title}
                title={category.title}
                image={category.image}
                active={category.active}
              />
            ))}
          </div>
        </div>
        <Ad />
      </div>
    </section>
  );
}
