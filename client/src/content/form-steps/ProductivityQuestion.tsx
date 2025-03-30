import React from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

interface ProductivityQuestionProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const ProductivityQuestion: React.FC<ProductivityQuestionProps> = ({
  value,
  onChange,
  onNext,
  onBack,
}) => {
  const productivityLevels = [
    { value: "veryLow", label: "Very low" },
    { value: "low", label: "Low" },
    { value: "average", label: "Average" },
    { value: "high", label: "High" },
    { value: "veryHigh", label: "Very high" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) {
      toast.error("Please select your productivity level");
      return;
    }
    onNext();
  };

  return (
    <div className="space-y-6 py-4 animate-fade-in">
      <h3 className="text-2xl font-medium mb-6">
        How productive do you think you are?
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <RadioGroup
            value={value}
            onValueChange={onChange}
            className="space-y-3"
          >
            {productivityLevels.map((level) => (
              <div
                key={level.value}
                className={`flex items-center border-2 rounded-md p-4 transition-all ${
                  value === level.value
                    ? "border-black bg-gray-50"
                    : "border-gray-200"
                }`}
              >
                <RadioGroupItem
                  value={level.value}
                  id={level.value}
                  className="mr-3"
                />
                <Label
                  htmlFor={level.value}
                  className="flex-grow cursor-pointer"
                >
                  {level.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="rounded-full w-12 h-12 p-0"
              onClick={onBack}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              type="submit"
              size="lg"
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductivityQuestion;
