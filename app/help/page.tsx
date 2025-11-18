"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const HELP_CENTER_URL = "https://help.market.envato.com/hc/en-us/sections/360007560992-Template-Kits";

export default function HelpPage() {
  useEffect(() => {
    // Auto-redirect after page load (matching the original meta refresh behavior)
    // The original had content="0" which means immediate redirect
    const timer = setTimeout(() => {
      window.location.href = HELP_CENTER_URL;
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleVisitHelp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = HELP_CENTER_URL;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] px-5">
      <div className="text-center">
        <Button
          onClick={handleVisitHelp}
          variant="default"
          className="bg-[#82b541] hover:bg-[#6a9433] text-white border-none rounded-md px-[30px] py-[11px]"
        >
          Visit Template Kit Help
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

