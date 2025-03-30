import React from "react";
import { Button } from "@/components/ui/button";

const ContentPage: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button className="bg-primary text-white shadow-lg hover:bg-primary/90">
        Ask AI
      </Button>
    </div>
  );
};

export default ContentPage;
