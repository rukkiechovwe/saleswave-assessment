import Image from "next/image";

export default function Button({ onClick,loading, small, secondary, cart, children }) {
  return cart ? (
    <button
      onClick={onClick}
      className="w-[270px] h-[41px] py-2 rounded-b bg-black text-white font-medium leading-6"
    >
      {children}
    </button>
  ) : secondary ? (
    <button
      onClick={onClick}
      className="w-[145px] h-[50px] py-4 border border-solid border-slate-200 rounded-lg"
    >
      <span className="mx-auto block text-[13px] text-grey-500 font-medium">
        {children}
      </span>
    </button>
  ) : (
    <button
      onClick={onClick}
      className={`px-12 py-4 bg-red-500 rounded-lg flex justify-center items-center gap-2.5 inline-flex ${
        small ? "w-[145px] h-[50px] text-sm" : "w-full h-14"
      }`}
    >
      {loading && (
        <Image
          className="w-6 h-6 origin-top-left rotate-180"
          src="https://via.placeholder.com/24x24"
          alt=""
        />
      )}
      <span className="text-neutral-50 text-[13px] font-medium">
        {children}
      </span>
    </button>
  );
}
