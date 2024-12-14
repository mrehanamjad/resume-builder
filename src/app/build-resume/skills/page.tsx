"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import { setSkills } from "@/lib/store/recume/resumeSlice";
import SectionHeadingAndTips from "@/components/SectionHeadingAndTips";
import { FaLightbulb } from "react-icons/fa";
import SkillCard from "@/components/SkillCard";
import BtnLoader from "@/components/BtnLoader";

interface SkillI {
  id?: number;
  skillName: string;
  skillLevel: string;
}

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resume = useAppSelector((state: any) => state.resume);
  console.log(resume);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [noOfSection, setNoOfSection] = useState([0]);
  const [loading,SetLoading] = useState<boolean>(false);

  console.log(noOfSection);
  const submit = async (data: any) => {
    console.log("Form Data:", data);

    const skillData: SkillI[] = noOfSection.map((n) => ({
      id: n,
      skillName: data[`skillName${n}`],
      skillLevel: data[`skillLevel${n}`],
    }));

    dispatch(setSkills(skillData));
    router.push("/build-resume/courses");
    SetLoading(true)
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-[cadetblue]/10 py-2 md:py-6">
      <Container>
        <div className="p-4  sm:p-6 md:p-9 lg:p-12 max-w-5xl w-full mx-auto rounded-lg bg-white ">
          <form onSubmit={handleSubmit(submit)} className="flex flex-col">
            <div className="mb-10">
              <SectionHeadingAndTips
                id={5}
                title="Skills"
                description="Technical and professional competencies"
                Icon={FaLightbulb}
                tips={[
                  "Organize by categories",
                  "List most relevant first",
                  "Include proficiency levels",
                  "Match job requirements",
                ]}
              />
            </div>
            <div className="grid place-items-center lg:grid-cols-2 gap-4">
              {noOfSection.map((n, k) => (
                <div key={k}>
                  <SkillCard
                    register={register}
                    errors={errors}
                    registerInp={`skillName${n}`}
                    registerRadio={`skillLevel${n}`}
                    setRemoveSkill={() => {
                      setNoOfSection((prev) =>
                        prev.filter((_, index) => index !== k)
                      );
                    }}
                  />
                </div>
              ))}
              <Button
                type="button"
                variant={"ghost"}
                className="w-full text-lg h-12  max-sm:self-center font-medium hover:text-[#5ab0b3]  text-[#5ab0b3] "
                onClick={() => {
                  setNoOfSection((prev) => [...prev, Date.now()]);
                }}
              >
                + Add Skill
              </Button>
            </div>
            <div className="w-full flex max-sm:justify-center  flex-row-reverse mt-6 sm:mt-4 ">
              <Button
                type="submit" // Ensure the button is of type "submit" to trigger form submission
                className="self-end w-full sm:w-fit"
                size="xl"
                variant={"cadetblue"}
              >
                Next: Courses & Certifications {loading && <BtnLoader /> }
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Page;
