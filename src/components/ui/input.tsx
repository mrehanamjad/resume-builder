import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label = '', className, type, ...props }, ref) => {

    const id = Date.now() + Math.random() + '';

    return (
      <div className="mt-2">
        {label && (
          <label htmlFor={id} className="block text-sm mb-1 font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-12  w-full rounded-sm border-[1.8px]  bg-[cadetblue]/5 px-3 py-1  text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground  focus-visible:outline-none  duration-100 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm lg:text-base focus:outline-none  border-input  focus:border-[cadetblue] ",
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

Input.displayName = "Input";

export { Input };
