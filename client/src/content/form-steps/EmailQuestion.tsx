import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

interface EmailQuestionProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const EmailQuestion: React.FC<EmailQuestionProps> = ({
  value,
  onChange,
  onNext,
  onBack,
}) => {
  const [focused, setFocused] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!validateEmail(value)) {
      toast.error("Please enter a valid email");
      return;
    }
    onNext();
  };

  return (
    <div className="space-y-2 animate-fade-in">
      <h3 className="text-2xl font-medium ">Your Email</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            type="email"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter your email"
            className={`text-lg py-6 px-4 border-2 transition-all ${
              focused ? "border-black" : "border-gray-200"
            }`}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoFocus
          />
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

export default EmailQuestion;
