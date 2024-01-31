import Images from "@/app/_assets/images";
import Image from "next/image";

const timer = [
  { count: "23", measurement: "Hours" },
  { count: "05", measurement: "Days" },
  { count: "59", measurement: "Minutes" },
  { count: "35", measurement: "Seconds" },
];

const SellTimer = ({ count, measurement }) => (
  <div className="bg-white rounded-full h-[62px] w-[62px] -gap-1 flex flex-col items-center justify-center   ">
    <p className="leading-5 font-bold">{count}</p>
    <p className="text-[11px]">{measurement}</p>
  </div>
);

export default function Ad() {
  return (
    <div className="py-[69px] px-[56px] flex gap-10 bg-black">
      <div className="w-1/2 space-y-8">
        <p className="text-[#0F6] font-semibold">Categories</p>
        <h2 className=" text-neutral-50 text-5xl font-bold leading-[60px] tracking-[1.92px]">
          Enhance Your Music Experience
        </h2>
        <div className="flex gap-6 ">
          {timer.map((time) => (
            <SellTimer
              key={time.count}
              count={time.count}
              measurement={time.measurement}
            />
          ))}
        </div>
        <button className="px-12 py-4 rounded bg-[#0F6] mt-2 text-neutral-50">
          Buy Now!
        </button>
      </div>
      <div className="w-1/2 relative">
        <div className="absolute h-full w-full top-0 left-0 rounded-full opacity-30 bg-[#D9D9D9] blur-[100px]" />
        <Image className="z-10 relative" src={Images.jbl} alt="" />
      </div>
    </div>
  );
}
