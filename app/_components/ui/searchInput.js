import Icons from "@/app/_assets/icons";

export default function Search({ name, title }) {
  return (
    <div className="relative h-[38px] w-[234px]">
      <input
        className="w-full h-[38px] py-[7px] pl-5 bg-neutral-50 rounded-lg text-xs leading-[18px] text-black font-medium placeholder:text-xs placeholder:leading-[18px] placeholder:opacity-50 placeholder:text-black placeholder:font-medium "
        placeholder={title}
        type="search"
        name={name}
      />

      <span className="absolute right-3 top-[7px]">{Icons.ic_search}</span>
    </div>
  );
}
