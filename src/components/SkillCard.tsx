'use Client'
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface SkillCardProps {
  register: any;
  errors: Record<string, any>;
  registerInp: string;
  registerRadio: string;
  setRemoveSkill?: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({
  register,
  errors,
  registerInp,
  registerRadio,
  setRemoveSkill,
}) => {
  const id = Date.now() + Math.random() + '';
  const levels:string[] = ['Noice','Beginner','Competent','Proficient','Expert']
  const [selectedLevel, setSelectedLevel] = useState<number>(-1)


  return (
    <div className="min-h-11 w-full  rounded-md shadow-md flex max-sm:flex-wrap items-center p-2 py-1 border gap-2">
      <input
        type="text"
        placeholder="Skill"
        {...register(registerInp, {
          required: "Field is required",
        })}
        className="h-full max-sm:w-full p-2 outline-none bg-[cadetblue]/5 border rounded border-transparent focus:border-[cadetblue]"
      />
      <div className="flex max-sm:w-full gap-2 items-center">
      <div className="flex max-sm:w-full  p-2 h-full items-center justify-center bg-[cadetblue]/5 rounded shadow-sm">
        <div className="flex mr-3 gap-3 text-xl font-bold text-gray-500 justify-center items-center max-sm:justify-evenly w-full">
          {levels.map((level, index) => (
            <div key={index} className="flex items-center">
              <label title={level} htmlFor={id+level}>
                {index <= selectedLevel  ? <FaStar className="text-[cadetblue] cursor-pointer " /> : <FaRegStar className="cursor-pointer " />}
              </label>
              <input
                type="radio"
                id={id+level}
                name={`${registerInp}`}
                value={level}
                className="hidden"
                {...register(registerRadio, {
                  required: "Field is required",
                })}
                onClick={() => setSelectedLevel(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <MdDelete
        className="text-4xl h-full p-1 text-red-400 cursor-pointer bg-[cadetblue]/5 rounded shadow-sm"
        onClick={setRemoveSkill}
      />
      </div>
    </div>
  );
};

export default SkillCard;
