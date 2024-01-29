import Icons from "@/app/_assets/icons";

export default function TopHeader() {
  return (
    <div className="w-full py-3 bg-black text-white text-sm leading-5">
      <div className="container flex justify-end">
        <div className="flex justify-between gap-[231px]">
          <p className="inline-flex gap-2">
            <span>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <span className="font-semibold underline">ShopNow</span>
          </p>
          <div className="inline-flex items-center  gap-[5px] ">
            <p>English</p>
            {Icons.ic_dropown}
          </div>
        </div>
      </div>
    </div>
  );
}
