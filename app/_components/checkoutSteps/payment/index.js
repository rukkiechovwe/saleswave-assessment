"use client";

import { useSelector } from "react-redux";
import Address from "./address";
import Order from "./order";
import Summary from "./summary";
import Button from "../../ui/button";

export default function Payment({ nextStep, prevStep }) {
  const personal_information = useSelector(
    (state) => state.checkout.personal_information
  );
   const shipping_address = useSelector(
     (state) => state.checkout.shipping_address
   );
  return (
    <>
      <div className="py-4 border-b border-solid border-neutral-80">
        <h3 className="px-[32px]">Review Order and Payment</h3>
      </div>
      <div className="pb-4 flex  ">
        <div className="w-1/2 flex flex-col gap-[49px]">
          <Address
            personal_information={personal_information}
            shipping_address={shipping_address}
          />

          <Order />
        </div>
        <div className="w-1/2">
          <Summary />
        </div>
      </div>

      <div className="flex gap-2 justify-end pt-6 pb-4 px-[32px] border-t border-solid border-neutral-80 mt-[166px]">
        <Button secondary={true} onClick={prevStep}>
          Previous
        </Button>
        <Button type="submit" onClick={nextStep} small={true}>
          Pay
        </Button>
      </div>
    </>
  );
}
