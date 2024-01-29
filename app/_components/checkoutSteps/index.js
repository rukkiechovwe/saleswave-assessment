"use client";
import Confirmation from "./confirmation";
import Payment from "./payment";
import PersonalInformation from "./personalInformation";
import ShippingAddress from "./shippingAddress";
import Button from "../ui/button";
import Info from "../ui/info";
import useSteps from "@/app/_utils/hooks/useSteps";
import { useRouter } from "next/navigation";

export default function CheckoutSteps() {
  const router = useRouter();
  const { steps, currentStep, nextStep, prevStep } = useSteps();

  return (
    <>
      <div className="container bg-white !px-0">
        <div className="flex items-center py-5 px-[32px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center w-1/4 relative ${
                currentStep === index ? "text-red-500" : "text-gray-700 "
              }`}
            >
              <p className="inline-flex items-center gap-[6px] text-[13px] leading-[18.2px] tracking-[0.2px]">
                {step.icon} <span>{step.title}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="border-b border-solid border-neutral-80 pb-[166px]">
          {currentStep === 0 && <PersonalInformation />}
          {currentStep === 1 && <ShippingAddress />}
          {currentStep === 2 && <Payment />}
          {currentStep === 3 && <Confirmation />}
        </div>
        {currentStep < steps.length - 1 && (
          <div className="flex gap-2 justify-end pt-6 pb-4 px-[32px]">
            <Button
              secondary={true}
              onClick={currentStep == 0 ? () => router.push("/") : prevStep}
            >
              {currentStep == 0 ? "Cancel" : "Previous"}
            </Button>
            <Button onClick={nextStep} small={true}>
              {currentStep == 2 ? "Pay" : "Next"}
            </Button>
          </div>
        )}
      </div>
      {currentStep < 2 && (
        <div className="container pt-[37px] pb-[34px]">
          <Info />
        </div>
      )}
    </>
  );
}
