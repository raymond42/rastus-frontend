import { Loader } from "lucide-react";
import { cn } from "@/utils/helpers";

interface SpinnerProps {
  className?: string;
  text?: string;
}

export function Spinner({
  className,
  text = "Just a moment...",
}: SpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Loader
        className={cn("h-6 w-6 animate-spin text-white", className)}
        role="status"
      />
      <p className="text-sm text-white-primary">{text}</p>
    </div>
  );
}
