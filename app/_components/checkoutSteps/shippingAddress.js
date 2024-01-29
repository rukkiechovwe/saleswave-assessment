import Input from "../ui/input";

export default function ShippingAddress() {
  return (
    <>
      <div className="py-4 border-b border-solid border-neutral-80">
        <h3 className="px-[32px]">Add new Address</h3>
      </div>
      <div className="pt-6 pb-4 px-[32px]">
        <p className="text-grey-700 text-[13px] pb-4">Shipping Information</p>
        <div className="grid grid-cols-3 gap-[24px] ">
          <Input
            type="text"
            id="streetAddress"
            name="streetAddress"
            title="Street Address"
            optional={false}
          />
          <Input
            type="text"
            id="apartment"
            name="apartment"
            title="Apartment, floor, etc. (optional)"
            optional={true}
          />
          <div />

          <Input
            type="text"
            id="city"
            name="city"
            title="Town/City*"
            optional={false}
          />
          <Input
            type="text"
            id="state"
            name="state"
            title="State"
            optional={false}
          />
          <div />

          <Input
            type="text"
            id="more_address"
            name="more_address"
            title="Addtional Address"
            optional={true}
            divClass="col-span-2"
          />
          {/* additional address */}
          {/* address label */}
          {/* set as default */}
        </div>
      </div>
    </>
  );
}
