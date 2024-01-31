export default function Summary() {
  return (
    <div className="px-6 pt-4 text-[13px] text-grey-500 flex flex-col gap-2">
      <div className="border-b border-solid border-neutral-80 pb-2">
        <p className="pb-4 leading-[16px] font-medium text-black-900">
          Order Summary
        </p>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-black-900 font-medium">$400</span>
        </div>
        <div className="flex justify-between pt-1">
          <span>Shipping fee</span>
          <span className="text-[#4AB247] font-medium">Free</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <span>
            Total <span className="text-[#B3BCCD]">(Inclusive of VAT)</span>
          </span>
          <span className="text-black-900 font-medium">$400</span>
        </div>
        <div className="flex justify-between pt-1">
          <span>Estimated VAT</span>
          <span className="text-black-900 font-medium">$39.99</span>
        </div>
      </div>
    </div>
  );
}
