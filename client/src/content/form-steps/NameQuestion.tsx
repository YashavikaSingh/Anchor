import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { toast } from "sonner";

interface NameQuestionProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const NameQuestion: React.FC<NameQuestionProps> = ({
  value,
  onChange,
  onNext,
}) => {
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error("Please enter your name");
      return;
    }
    onNext();
  };

  return (
    <div className="space-y-2 py-4 animate-fade-in">
      <h3 className="text-base font-medium">Your Name</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter your name"
            className={`text-lg py-6 px-4 border-2 transition-all ${
              focused ? "border-black" : "border-gray-200"
            }`}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoFocus
          />
          <div className="flex justify-end">
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

export default NameQuestion;
