'use client'
import * as React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  label?: string; // Adding the `label` prop
  maxLength?:number; 
}


const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label = "",maxLength = 175, ...props }, ref) => {
    const [length,setLength] = React.useState(0)
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
            "flex min-h-48 w-full rounded-md border border-input bg-[cadetblue]/5 px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm lg:text-base resize-none focus:outline-none focus:border-[cadetblue]",
            className
          )}
          maxLength={maxLength}
          ref={ref}
          {...props}
          id={id}
          onChange={(e)=>setLength(e.target.value.length)}
        />
        <p className={`flex px-3 ${length >= maxLength ? 'text-red-700': 'text-gray-700'}`}><span className="flex-1"></span><span>{length + ' / ' + maxLength}</span></p>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
