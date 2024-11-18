"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MdDelete } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Section({
  register,
  errors,
  input1,
  input2,
  input3,
  textarea1,
  setRemoveSection
}: {
  register: any;
  errors: any;
  input1: string[] ; // [Label,placeholder,nameForRegister]
  input2: string[];
  input3: string[];
  textarea1: any;
  setRemoveSection?: () => void;
}) {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="p-2 bg-slate- rounded-lg border-2 border-[cadetblue]">
      <div
        className="h-12 text-xl font-medium p-2 flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{text || "(not specified)"}</span>
        <div className="flex gap-5 text-3xl font-bold items-center justify-center">
          <MdDelete className="cursor-pointer text-red-600" onClick={setRemoveSection} />
          {isOpen ? (
            <FaChevronUp className="cursor-pointer" />
          ) : (
            <FaChevronDown className="cursor-pointer" />
          )}
        </div>
      </div>
      <div
        id="section1"
        className={`grid grid-cols-3 gap-4 p-2 w-full max-md:flex-wrap duration-1000 ${
          isOpen ? "opacity-100" : "hidden  opacity-0 "
        }`}
      >
        <div className="w-full ">
          <Input
            label={input1[0]}
            type="text"
            placeholder={input1[1]}
            {...register(input1[2], {
              required: "Qualification is required",
            })}
            onChange={(e) => setText(e.target.value)}
          />
          {errors[input1[2]] && (
            <p className="text-red-600">
              {errors[input1[2]].message as string}
            </p>
          )}
        </div>
        <div className="w-full ">
          <Input
            label={input2[0]}
            type="text"
            placeholder={input2[1]}
            {...register(input2[2], {
              required: "Institution name is required",
            })}
          />
          {errors[input2[2]] && (
            <p className="text-red-600">
              {errors[input2[2]].message as string}
            </p>
          )}
        </div>
        <div className="w-full ">
          <Input
            label={input3[0]}
            type="text"
            placeholder={input3[1]}
            {...register(input3[2], {
              required: "Start & End Date is required",
            })}
          />
          {errors[input3[2]] && (
            <p className="text-red-600">
              {errors[input3[2]].message as string}
            </p>
          )}
        </div>
        <div className="col-span-3">
        <Textarea
          label={textarea1[0]}
          placeholder={textarea1[1]}
          {...register(textarea1[2], {
            required: "educationDescription is required",
          })}
        />
        </div>
        {errors[textarea1[2]] && (
          <p className="text-red-600">
            {errors[textarea1[2]].message as string}
          </p>
        )}
      </div>
    </div>
  );
}

export default Section;
