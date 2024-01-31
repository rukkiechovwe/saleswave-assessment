"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import useStars from "./useStars";
import Icons from "@/app/_assets/icons";
import Button from "../ui/button";

const ProductButton = ({ icon }) => (
  <div className="bg-white h-[34px] w-[34px] rounded-full flex items-center justify-center cursor-pointer">
    {icon}
  </div>
);

export default function ProductCard({ product }) {
  const {
    product_id,
    product_old_price,
    product_price,
    product_quantity,
    product_rating,
    product_stars,
    product_image,
    product_name,
    product_brand,
    product_description,
    is_product_new,
  } = product;
  const router = useRouter();

  const { starIcons } = useStars(product_stars);

  return (
    <div className="space-y-4">
      <div className="group relative bg-neutral-100 w-[270px] h-[250px] flex items-center justify-center">
        <div className=" w-[190px] h-[180px] flex items-center justify-center group-hover:pb-[23px] transition-all">
          <Image src={product_image} alt="" />
        </div>
        <div className="absolute top-4 right-4 space-y-2">
          <ProductButton icon={Icons.ic_favorite} />
          <ProductButton icon={Icons.ic_eye} />
        </div>
        {is_product_new && (
          <div className="absolute top-4 left-4 text-xs leading-[18px] text-neutral-50 py-1 px-3 bg-[#0F6] rounded">
            New
          </div>
        )}
        <div className="absolute bottom-0 left-0 invisible group-hover:visible transition-all ">
          <Button cart={true} onClick={() => router.push("/checkout")}>
            Add To Cart
          </Button>
        </div>
      </div>
      <div className="space-y-[10px]">
        <h4 className="font-medium leading-6">{product_name}</h4>
        <div className="items-center space-y-2">
          <p className="text-red-500 leading-6 font-medium">
            {product_price}
            {product_price && (
              <span className="text-black opacity-50 ml-3 line-through">
                {product_price}
              </span>
            )}
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex">{starIcons}</span>

            <span className="opacity-50 text-sm leading-[21px] font-semibold">{`(${product_rating})`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
