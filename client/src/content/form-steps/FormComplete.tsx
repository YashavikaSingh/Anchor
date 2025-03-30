import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface FormCompleteProps {
  formData: {
    name: string;
    email: string;
    productivity: string;
  };
  onReset: () => void;
}

const getProductivityLabel = (value: string) => {
  const mapping: Record<string, string> = {
    veryLow: "Very low",
    low: "Low",
    average: "Average",
    high: "High",
    veryHigh: "Very high",
  };
  return mapping[value] || value;
};

const FormComplete: React.FC<FormCompleteProps> = ({ formData, onReset }) => {
  return (
    <div className="space-y-2 py-4 animate-fade-in text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle2 className="h-16 w-16 text-green-500" />
      </div>
      <h3 className="text-2xl font-medium mb-6">Thank You!</h3>
      <div className="space-y-4 mb-8 text-left bg-gray-50 p-6 rounded-lg">
        <div>
          <div className="text-sm text-gray-500">Name</div>
          <div className="font-medium">{formData.name}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Email</div>
          <div className="font-medium">{formData.email}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Productivity Level</div>
          <div className="font-medium">
            {getProductivityLabel(formData.productivity)}
          </div>
        </div>
      </div>
      <Button onClick={onReset} className="w-full">
        Start Over
      </Button>
    </div>
  );
};

export default FormComplete;
