import Icons from "@/app/_assets/icons";
import { useState } from "react";

export default function useSteps() {
  const steps = [
    {
      title: "Personal Information",
      icon: Icons.ic_person,
    },
    {
      title: "Shipping Addrress",
      icon: Icons.ic_location,
    },
    {
      title: "Payment",
      icon: Icons.ic_payment,
    },
    {
      title: "Confirmation",
      icon: Icons.ic_confirmation,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      return;
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      return;
    }
  };

  return { steps, currentStep, nextStep, prevStep };
}
