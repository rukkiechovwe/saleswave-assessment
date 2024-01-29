import Icons from "@/app/_assets/icons";

export default function Info() {
  return (
    <div className="w-full h-10 bg-zinc-500 bg-opacity-10 rounded flex items-center gap-[13px] py-2 px-4 ">
      {Icons.ic_info}
      <p className="text-slate-700 text-[11px] font-medium">
        Our checkout is safe and secure. Your personal and payment information
        is securely transmitted via 128-bit encryption. We do not store any
        payment card information on our systems
      </p>
    </div>
  );
}
