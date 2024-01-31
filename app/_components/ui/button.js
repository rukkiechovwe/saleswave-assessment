import Image from "next/image";

export default function Button({
  onClick,
  loading,
  small,
  secondary,
  cart,
  children,width
}) {
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
      className={`px-12 py-4 bg-red-500 flex justify-center items-center gap-2.5 inline-flex ${
        small
          ? `${width ? width : "w-[145px]"} h-[50px] text-sm rounded-lg`
          : "w-auto h-14 rounded"
      }`}
    >
      {loading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 animate-spin text-white"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M236,128a108,108,0,0,1-216,0c0-42.52,24.73-81.34,63-98.9A12,12,0,1,1,93,50.91C63.24,64.57,44,94.83,44,128a84,84,0,0,0,168,0c0-33.17-19.24-63.43-49-77.09A12,12,0,1,1,173,29.1C211.27,46.66,236,85.48,236,128Z"></path>
        </svg>
      )}
      <span className="text-neutral-50 text-[13px] font-medium">
        {children}
      </span>
    </button>
  );
}
