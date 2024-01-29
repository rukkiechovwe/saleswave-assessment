import Icons from "@/app/_assets/icons";

export default function Back({ children }) {
  return (
    <div className="flex items-center gap-2 pt-[6px]">
      {Icons.ic_back}
      <span className="text-[13px] leading-6">{children}</span>
    </div>
  );
}
