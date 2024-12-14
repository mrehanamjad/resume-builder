"use client";
import { Edit2Icon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaBook, FaBriefcase, FaChevronDown, FaFolderOpen, FaGraduationCap, FaList, FaTasks, FaUser } from "react-icons/fa";

const editSections = [
  {
    name: "Personal Details",
    href: "/build-resume/personal-info",
    icon: FaUser,
  },
  {
    name: "Professional Summary",
    href: "/build-resume/professional-summary",
    icon: FaList,
  },
  {
    name: "Work Experience",
    href: "/build-resume/work-experience",
    icon: FaBriefcase,
  },
  {
    name: "Education",
    href: "/build-resume/education",
    icon: FaGraduationCap,
  },
  {
    name: "Skills",
    href: "/build-resume/skills",
    icon: FaTasks,
  },
  {
    name: "Projects",
    href: "/build-resume/projects",
    icon: FaFolderOpen,
  },
  {
    name: "Courses",
    href: "/build-resume/courses",
    icon: FaBook,
  },
];

function EditDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-xs text-black ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
            w-full flex items-center justify-between 
            bg-blue-500 text-white 
            px-4 py-2 rounded-lg 
            hover:bg-blue-600 
            transition duration-300
          "
      >
        <span className="flex items-center gap-16">
        <Edit2Icon size={16} /> Edit
        </span>
        <FaChevronDown
          className={`
              transform transition-transform duration-300
              ${isOpen ? "rotate-180" : "rotate-0"}
            `}
        />
      </button>

      {isOpen && (
        <div
          className="
              absolute z-20 top-full left-0 right-0 
              mt-2 
              bg-white 
              shadow-lg rounded-lg 
              max-h-96 overflow-y-auto
              border border-gray-200 text-black
            "
        >
          {editSections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className="
                   px-4 py-2 
                  hover:bg-blue-50 
                  transition duration-200
                  flex items-center
                "
              onClick={() => setIsOpen(false)}
            >
              {section.icon && (
                <section.icon className="mr-2 text-blue-500" />
              )}
              {section.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default EditDropDown;
