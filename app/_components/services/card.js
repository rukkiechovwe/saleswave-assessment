export default function Card({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-6 max-w-[262px] ">
      <div className="h-[80px] w-[80px] rounded-full bg-black-100 flex items-center justify-center">
        <div className="h-[58px] w-[58px] rounded-full bg-black text-white flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="space-y-2">
        <h6 className="uppercase text-center font-semibold text-xl">{title}</h6>
        <p className="text-center text-sm">{description}</p>
      </div>
    </div>
  );
}
