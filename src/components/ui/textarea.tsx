import * as React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  label?: string; // Adding the `label` prop
}


const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label = "", ...props }, ref) => {
    const id = Date.now() + + Math.random() + '';
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm mb-1 font-medium text-gray-700">
            {label}
          </label>
        )}
        <textarea
          className={cn(
            "flex min-h-48 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none focus:outline-none focus:border-[#7fdadd]",
            className
          )}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
