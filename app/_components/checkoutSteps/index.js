"use client";
import Confirmation from "./confirmation";
import Payment from "./payment";
import PersonalInformation from "./personalInformation";
import ShippingAddress from "./shippingAddress";
import Info from "../ui/info";
import useSteps from "@/app/_utils/hooks/useSteps";
import ProductCard from "../products/productCard";
import products from "@/app/_utils/data/prodcucts";

export default function CheckoutSteps() {
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
        <div
          className={
            currentStep === 2
              ? "mb-[93px] pb-4"
              : currentStep === 3
              ? "mb-10 pb-16"
              : ""
          }
        >
          {currentStep === 0 && <PersonalInformation nextStep={nextStep} />}
          {currentStep === 1 && (
            <ShippingAddress nextStep={nextStep} prevStep={prevStep} />
          )}
          {currentStep === 2 && (
            <Payment nextStep={nextStep} prevStep={prevStep} />
          )}
          {currentStep === 3 && (
            <Confirmation nextStep={nextStep} prevStep={prevStep} />
          )}
        </div>
      </div>
      {currentStep < 2 && (
        <div className="container pt-[37px] pb-[34px]">
          <Info />
        </div>
      )}
      {currentStep == 3 && (
        <div className="container">
          <h3 className="pb-[32px] font-medium text-[21px]">We think you might like there</h3>
          <div className="grid grid-cols-4 gap-[30px] pb-[30px]">
            {[products[4], products[5], products[6], products[7]].map(
              (product) => (
                <ProductCard key={product.product_id} product={product} />
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
