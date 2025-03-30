import { X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import EmailQuestion from "./form-steps/EmailQuestion";
import NameQuestion from "./form-steps/NameQuestion";
import ProductivityQuestion from "./form-steps/ProductivityQuestion";
import FormComplete from "./form-steps/FormComplete";

const FloatingButton: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [productivity, setProductivity] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setProductivity("");
    setStep(0);
    setOpenDrawer(false);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <>
      {/* Anchor AI button to trigger extension */}
      <div className="fixed z-[9999] bottom-4 right-0">
        <Button onClick={() => setOpenDrawer(true)}>Anchor</Button>
      </div>

      {openDrawer && (
        <div
          className="fixed z-[9999] 
         bg-background
         w-full sm:w-[480px] h-full right-0 top-0 shadow-lg border-l rounded-l-lg flex flex-col px-6 pt-12 pb-6 animate-slide-in"
        >
          <h2 className="text-4xl font-bold pb-2">Anchor AI</h2>

          {/*  Divider */}
          <hr className="mb-6" />

          {/* Close button */}
          <Button
            size="sm"
            variant={"outline"}
            className="absolute  top-4 right-4"
            onClick={() => setOpenDrawer(false)}
          >
            <X className="h-5 w-5" />
          </Button>

          {/* form questions */}

          {step === 0 && (
            <NameQuestion value={name} onChange={setName} onNext={nextStep} />
          )}
          {step === 1 && (
            <EmailQuestion
              value={email}
              onChange={setEmail}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 2 && (
            <ProductivityQuestion
              value={productivity}
              onChange={setProductivity}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 3 && (
            <FormComplete
              formData={{ name, email, productivity }}
              onReset={resetForm}
            />
          )}
        </div>
      )}
    </>
  );
};

export default FloatingButton;
