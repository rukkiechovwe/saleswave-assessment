import Image from "next/image";
import Icons from "@/app/_assets/icons";
import products from "@/app/_utils/data/prodcucts";

export default function Order() {
  return (
    <div className="bg-neutral-70 text-grey-500">
      <p className="inline-flex items-center gap-[4px] text-[13px] text-black-900 py-4 px-6">
        Review your order
      </p>
      <OrderSummaryItem order={products[11]} />
      <OrderSummaryItem order={products[10]} />
    </div>
  );
}

function OrderSummaryItem({ order }) {
  return (
    <div className="flex justify-between p-6">
      <div className="flex gap-6">
        <Image src={order.product_image} alt="" className="w-[70px] h-[70px]" />
        <div className="flex flex-col gap-2 justify-between">
          <span className="text-xs [#B3BCCD]">ADIDAS</span>
          <span className="text-black-900">{order.product_name}</span>
          <span className="inline-flex items-center gap-1 text-[10px] bg-[#F8F8F9] py-1 px-[6px]">
            {Icons.ic_arrow_left} This item cannot be changed or returned
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-[11px]">
        <span className="text-sm font-medium text-[#DD4B39]">$24.99</span>
        <span className="text-xs text-[#B3BCCD]">
          QTY: <span className="text-slate-700">1</span>
        </span>
      </div>
    </div>
  );
}
