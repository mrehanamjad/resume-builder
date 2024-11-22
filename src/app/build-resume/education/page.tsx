"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import Section from "@/components/Section";
import { setEducation } from "@/lib/store/recume/resumeSlice";
import SectionHeadingAndTips from "@/components/SectionHeadingAndTips";
import { FaGraduationCap } from "react-icons/fa";

interface EducationI {
  id?: number;
  qualification: string;
  institutionName: string;
  educationStartAndEndDate: string;
  educationDescription: string;
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

  console.log(noOfSection);
  const submit = async (data: any) => {
    console.log("Form Data:", data);

    const educationData: EducationI[] = noOfSection.map((n) => ({
      id: n,
      qualification: data[`qualification${n}`],
      institutionName: data[`institutionName${n}`],
      educationStartAndEndDate: data[`educationStartAndEndDate${n}`],
      educationDescription: data[`educationDescription${n}`],
    }));

    dispatch(setEducation(educationData));
    router.push("/build-resume/work");
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg--300">
      <Container>
        <div className="p-4 sm:p-6 md:9 lg:p-12 max-w-5xl w-full mx-auto bg-white ">
          <form onSubmit={handleSubmit(submit)} className="flex flex-col">
            <div className="mb-10">
              {/* <h1 className="text-4xl font-bold text-[cadetblue]">Education:</h1>
              <p className="text-gray-600">
                Keep the information relevant and concise
              </p> */}
              <SectionHeadingAndTips
                id={2}
                title="Education"
                description="Academic qualifications and achievements"
                Icon={FaGraduationCap}
                tips={[
                  "List most recent first",
                  "Include degree, institution, year",
                  "Add relevant coursework",
                  "Mention academic honors",
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              {noOfSection.map((n, k) => (
                <div key={k}>
                  <Section
                    register={register}
                    errors={errors}
                    input1={[
                      "Degree or Qualification",
                      "",
                      `qualification${n}`,
                      true,
                    ]}
                    input2={[
                      "Institution Name",
                      "",
                      `institutionName${n}`,
                      true,
                    ]}
                    input3={[
                      "Start & End Date",
                      "e.g. May 2020 - Jan 2024",
                      `educationStartAndEndDate${n}`,
                      true,
                    ]}
                    textarea1={[
                      "Description",
                      "Any honors or award recieved",
                      `educationDescription${n}`,
                      true,
                    ]}
                    setRemoveSection={() =>
                      setNoOfSection((prev) =>
                        prev.filter((_, index) => index !== k)
                      )
                    }
                  />
                </div>
              ))}
              <Button
                type="button"
                variant={"ghost"}
                className="w-full sm:w-fit text-lg max-sm:self-center font-medium hover:text-[#5ab0b3] mt-6 text-[#5ab0b3] "
                onClick={() => {
                  setNoOfSection((prev) => [...prev, Date.now()]);
                }}
              >
                + Add Education
              </Button>
            </div>
            <div className="w-full flex max-sm:justify-center  flex-row-reverse mt-6 sm:mt-4 ">
              <Button
                type="submit" // Ensure the button is of type "submit" to trigger form submission
                className="self-end w-full sm:w-fit"
                size="xl"
                variant={"cadetblue"}
              >
                Next: Work Experience
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Page;
