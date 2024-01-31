
export default function Card({ title, image, active }) {
  return (
    <div
      className={`flex flex-col items-center justify-center h-[145px] w-[170px] gap-4 rounded p-6 hover:bg-red-500 hover:text-white ${
        active
          ? "bg-red-500 text-white"
          : "bg-transparent border border-slid border-black-30"
      }`}
      key={title}
    >
      {image}
      <p className="text-base leading-6">{title}</p>
    </div>
  );
}
