import Image from "next/image";
import Images from "@/app/_assets/images";
import Icons from "@/app/_assets/icons";

export default function Slider() {
  return (
    <section className="pt-10  pb-[140px]">
      <div className="container">
        <div className="pt-[69px] pb-[47px] px-[56px]  flex gap-10 bg-black">
          <div className="w-1/2 space-y-8">
            <p className="text-neutral-50 inline-flex items-center gap-6">
              <Image src={Images.apple} alt="apple_logo" />
              <span> iPhone 14 Series</span>
            </p>
            <h2 className=" text-neutral-50 text-5xl font-bold tracking-[1.92px] leading-[60px] ">
              Up to 10% <br />
              off Voucher
            </h2>
            <p className="inline-flex items-center gap-2 text-white">
              <span className="border-b border-white pb-1">Shop Now</span>{" "}
              {Icons.ic_arrow_right}
            </p>
          </div>
          <div className="w-1/2">
            <Image src={Images.iphone} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
