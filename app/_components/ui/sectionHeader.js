import Icons from "@/app/_assets/icons";

export default function SectionHeader({ title, description }) {
  return (
    <div className="space-y-5">
      <div className="inline-flex items-center gap-4">
        {Icons.ic_rectangle}
        <p className="text-red-500 font-semibold">{title}</p>
      </div>
      <h2 className="text-4xl font-semibold leading-[48px] font-inter">
        {description}
      </h2>
    </div>
  );
}
