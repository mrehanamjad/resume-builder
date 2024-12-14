"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ConfirmDelete from "./ConfirmDelete";
import { MdDelete } from "react-icons/md";

function Section({
  register,
  errors,
  input1,
  input2,
  input3,
  input4,
  textarea1,
  setRemoveSection,
}: {
  register: any;
  errors: any;
  input1: [string, string, string, boolean]; // [Label,placeholder,nameForRegister,isRequired]
  input2: [string, string, string, boolean];
  input3: [string, string, string, boolean];
  input4?: [string, string, string, boolean];
  textarea1: [string, string, string, boolean];
  setRemoveSection?: () => void;
}) {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`p-2 bg-slate- rounded-lg border-2 border-[cadetblue]  shadow-xl duration-300 ${
        !isOpen ? "bg-[cadetblue]/80" : ""
      }`}
    >
      <div
        className="h-10 text-xl font-medium p-2 px-4 flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{text || "(not specified)"}</span>
        <div className="flex gap-5 text-[1.75rem] font-bold items-center justify-center">
          {/* <MdDelete className="cursor-pointer text-red-500" onClick={setRemoveSection} /> */}
          <ConfirmDelete
          toConfirm={
            <MdDelete
          className="cursor-pointer text-red-500 text-2xl"
          onClick={(e) => e.stopPropagation()}
        />
          }
            dialogTitle="Confirm Deletion"
            dialogDescription="Are you sure you want to delete this item? This action cannot be undone."
            dialogAction="Delete"
            actionFunc={setRemoveSection}
          />
          {isOpen ? (
            <FaChevronUp className="cursor-pointer" />
          ) : (
            <FaChevronDown className="cursor-pointer" />
          )}
        </div>
      </div>
      <div
        id="section1"
        className={`grid grid-cols-1  ${
          input4 ? "md:grid-cols-2" : "md:grid-cols-3"
        } gap-4 p-2 w-full max-md:flex-wrap duration-1000 ${
          isOpen ? "opacity-100" : "hidden  opacity-0 "
        }`}
      >
        <div className="w-full ">
          <Input
            label={input1[0]}
            type="text"
            placeholder={input1[1]}
            {...register(input1[2], {
              required: input1[3] && `${input1[0]} is required`,
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
              required: input2[3] && `${input2[0]} is required`,
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
              required: input3[3] && `${input3[0]} is required`,
            })}
          />
          {errors[input3[2]] && (
            <p className="text-red-600">
              {errors[input3[2]].message as string}
            </p>
          )}
        </div>
        {input4 && (
          <div className="w-full ">
            <Input
              label={input4[0]}
              type="text"
              placeholder={input4[1]}
              {...register(input4[2], {
                required: input4[3] && `${input4[0]} is required`,
              })}
            />
            {errors[input4[2]] && (
              <p className="text-red-600">
                {errors[input4[2]].message as string}
              </p>
            )}
          </div>
        )}
        <div className={input4 ? "md:col-span-2" : "md:col-span-3"}>
          <Textarea
            maxLength={160}
            label={textarea1[0]}
            placeholder={textarea1[1]}
            {...register(textarea1[2], {
              required: textarea1[3] && `${textarea1[0]} is required`,
              maxLength: {
                value: 160,
                message: "Textarea cannot exceed 30 characters",
              },
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
