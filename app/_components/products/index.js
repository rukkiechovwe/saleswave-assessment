import products from "@/app/_utils/data/prodcucts";
import SectionHeader from "../ui/sectionHeader";
import ProductCard from "./productCard";

export default function Products() {
  return (
    <section className="pb-[140px]">
      <div className="container space-y-[60px]">
        <SectionHeader
          title="Our Products"
          description="Explore Our Products"
        />
        <div className="grid grid-cols-4 gap-[30px]">
          {products.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
