"use client";
import { useRouter } from "next/navigation";

import Button from "@/app/_components/ui/button";
import Icons from "@/app/_assets/icons";
import Image from "next/image";
import successPng from "@/app/_assets/images/success.png";

export default function Confirmation() {
    const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center gap-10 pt-9">
        <div className="space-y-4 text-center">
          <Image src={successPng} alt="" className="w-[200px] mx-auto" />
          <p className="text-[17px] font-medium ">
            Your order has been successfully registered.
          </p>
          <p className="text-grey-500">
            You’ll receive an email at{" "}
            <span className="text-[#DD4B39]">sarahoshuu@gmail.com</span> once
            <br />
            your order is confirmed
          </p>
        </div>
        <Button small={true} width="w-178px" onClick={() => router.push("/")}>
          Continue Shopping
        </Button>
        <div className="flex flex-col text-grey-500 text-[13px] bg-[#f9f9f9] p-4 max-w-[583px] w-full">
          <span className="text-black-900 pb-3">Order Details</span>
          <div className="flex justify-between pb-2">
            <span>Order Number</span>
            <span className="text-black-900">#ORD - 202000000</span>
          </div>
          <div className="flex justify-between">
            <span>Amount Paid:</span>
            <span className="text-black-900">$400</span>
          </div>
        </div>

        <div className="flex items-center text-[#394357] justify-between max-w-[583px] w-full text-[13px] font-medium">
          <p className="inline-flex items-center gap-[6px]">
            {Icons.ic_share} <span>Share with friends</span>
          </p>
          <p className="inline-flex items-center gap-[6px]">
            {Icons.ic_route} <span>Track Order</span>
          </p>
          <p className="inline-flex items-center gap-[6px]">
            {Icons.ic_camera} <span>Take a screenshot</span>
          </p>
        </div>
      </div>
    </>
  );
}
