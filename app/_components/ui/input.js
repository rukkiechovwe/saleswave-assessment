export default function Input({
  divClass,
  optional,
  title,
  icon,
  value,
  errors,
  ...rest
}) {
  return (
    <div className={divClass}>
      <div className="w-full h-[51px] p-4 bg-neutral-50 rounded-lg relative text-[13px]">
        <input
          className={`absolute w-full h-full p-4 bg-transparent top-0 left-0 z-[99]`}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          {...rest}
        />
        {/* {icon && (
          <div className="absolute right-4 bottom-[19px] text-grey-500">
            {icon}
          </div>
        )} */}
        {!value && (
          <p className=" leading-[18.20px] absolute top-4 left-4">
            <span className="text-grey-500 font-medium">{title}</span>
            {!optional && <span className="text-orange-700">*</span>}
          </p>
        )}
      </div>
      {errors && <p className="mt-2 text-xs text-red">{errors}</p>}
    </div>
  );
}
