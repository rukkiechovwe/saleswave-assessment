"use client";

import { useSelector } from "react-redux";
import Address from "./address";
import Order from "./order";
import Summary from "./summary";

export default function Payment() {
  // const count = useSelector((state: RootState) => state.counter.value)
  const personal_information = useSelector(
    (state) => state.checkout.personal_information
  );
  return (
    <>
      <div className="py-4 border-b border-solid border-neutral-80">
        <h3 className="px-[32px]">Review Order and Payment</h3>
      </div>
      <div className="pt-6 pb-4 px-[32px] grid grid-cols-2">
        <p>{personal_information?.first_name}</p>
        <Address personal_information={personal_information} />

        <Summary />
        <Order />
      </div>
    </>
  );
}
