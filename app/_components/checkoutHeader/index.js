import Icons from "@/app/_assets/icons";
import Back from "../ui/back";

export default function Header() {
  return (
    <header className="h-[126px] shadow-xl bg-white">
      <div className="pt-10 pb-2 border-b border-solid border-neutral-80">
        <div className="container flex justify-between items-center">
          {Icons.ic_pixi_commerce}
          <div className="divide-x divide-slate-200 text-[13px] font-medium flex items-center gap-4 ">
            <p className="mr-[27px] leading-[15px]">Secure Checkout</p>
            <div className="pl-4 inline-flex items-center gap-2 text-grey-500 leading-[18.2px]">
              {Icons.ic_phone}
              <p>
                For assistance, call{" "}
                <span className="text-black">800-1160210</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Back>Back to cart</Back>
      </div>
    </header>
  );
}
