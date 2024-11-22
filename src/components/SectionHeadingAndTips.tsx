import React from "react";
import { IconType } from "react-icons";

function SectionHeadingAndTips({
  id,
  Icon,
  title,
  description,
  tips,
}: {
  id: number;
  Icon: IconType;
  title: string;
  description: string;
  tips: string[];
}) {
  return (
    <div key={id} className="bg-white rounded-lg   ">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-[cadetblue]/20 rounded-lg">
          <Icon className="w-9 h-9 text-[cadetblue]" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-[#589ea0] mb-1 flex items-center">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          <div className="bg-[cadetblue]/5 rounded-lg p-3">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Tips:</h4>
            <ul className="list-disc ml-4 space-y-1">
              {tips.map((tip: string, index: number) => (
                <li key={index} className="text-sm text-gray-600">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeadingAndTips;
