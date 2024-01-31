import Icons from "@/app/_assets/icons";

export default function Address({ personal_information, shipping_address }) {
  return (
    <div className="bg-neutral-70 text-grey-500">
      <div className="flex justify-between px-6 py-4 border-b border-solid border-neutral-80">
        <p className="inline-flex items-center gap-2 text-[13px] text-black-900">
          {Icons.ic_checkout_location} <span>Home</span>
        </p>
        <span className="text-[#DD4B39] text-[13px]">Change address</span>
      </div>
      <div className="px-6 py-5">
        <div className="flex flex-col gap-4  text-[13px]">
          <p className="flex gap-[28px]">
            <span className="">Name:</span>
            <span className="text-slate-700 font-medium">
              {`${personal_information?.first_name} ${personal_information?.last_name}`}
            </span>
          </p>
          <p className="flex gap-[15px]">
            <span className="">Address:</span>
            <span className="text-slate-700 font-medium">
              {`${shipping_address?.street}, ${shipping_address?.town},  ${shipping_address?.state}`}
            </span>
          </p>

          <div className="flex justify-between">
            <p className="flex gap-[32px]">
              <span className="">Email:</span>
              <span className="text-slate-700 font-medium">
                {personal_information?.email}
              </span>
            </p>

            <p className="inline-flex items-center gap-1 text-[#4AB247]">
              {Icons.ic_check} <span>Verified</span>
            </p>
          </div>
          <p className="flex gap-[27px]">
            <span className="">Phone:</span>
            <span className="text-slate-700 font-medium">
              {personal_information?.phone_number}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
