"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import Section from "@/components/Section";
import { setWorkExperience } from "@/lib/store/recume/resumeSlice";
import SectionHeadingAndTips from "@/components/SectionHeadingAndTips";
import { FaBriefcase } from "react-icons/fa";
import BtnLoader from "@/components/BtnLoader";
import DontIncludeCheck from "@/components/DontIncludeCheck";
import { ArrowRight } from "lucide-react";

interface WorkExperienceI {
  id?: number;
  jobTitle: string;
  companyName: string;
  jobStartAndEndDate: string;
  jobDescription: string;
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
    const workExperienceData:WorkExperienceI[] = noOfSection.map((n) => ({
      id: n,
      jobTitle: data[`jobTitle${n}`],
      companyName: data[`companyName${n}`],
      jobStartAndEndDate: data[`jobStartAndEndDate${n}`],
      jobDescription: data[`jobDescription${n}`],
    }));
    dispatch(setWorkExperience(workExperienceData));

    router.push("/build-resume/skills");
    SetLoading(true)
  };

  const submitEmpty = () => {
    dispatch(setWorkExperience([]));
    router.push("/build-resume/skills");
    SetLoading(true);
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-[cadetblue]/10 py-2 md:py-6">
      <Container>
        <div className="p-4 sm:p-6 md:9 lg:p-12 max-w-5xl w-full mx-auto rounded-lg bg-white ">
          <form onSubmit={handleSubmit(submit)} className="flex flex-col">
            <div className="mb-10">
              {/* <h1 className="text-4xl font-bold text-[cadetblue]">Education:</h1>
              <p className="text-gray-600">
                Keep the information relevant and concise
              </p> */}
              <SectionHeadingAndTips
                id={2}
                title="Work Experience"
                description="Professional work history and accomplishments"
                Icon={FaBriefcase}
                tips={[
                  'Use reverse chronological order',
                  'Focus on achievements',
                  'Include metrics when possible',
                  'Use action verbs'
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
                      "Job Title",
                      "",
                      `jobTitle${n}`,
                      true
                    ]}
                    input2={["Company Name", "", `companyName${n}`,true]}
                    input3={[
                      "Start & End Date",
                      "e.g. May 2020 - Jan 2024",
                      `jobStartAndEndDate${n}`,
                      true
                    ]}
                    textarea1={[
                      "Description",
                      "Any honors or award recieved",
                      `jobDescription${n}`,
                      true
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
            <DontIncludeCheck
                checkFunc={() => {
                  setNoOfSection([]);
                  submitEmpty();
                }}
                unCheckFunc={() => setNoOfSection([0])}
              />
              <Button
                type="submit" // Ensure the button is of type "submit" to trigger form submission
                className="self-end w-full sm:w-fit"
                size="xl"
                variant={"cadetblue"}
              >
                Next: Skills {loading ? <BtnLoader /> : <ArrowRight className="w-5 h-5" /> }
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Page;
