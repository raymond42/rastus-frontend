import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return (
    <Loader
      className={cn("h-6 w-6 animate-spin text-muted-foreground", className)}
      role="status"
    />
  );
}
