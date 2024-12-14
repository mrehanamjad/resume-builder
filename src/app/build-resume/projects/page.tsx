"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import Section from "@/components/Section";
import { setCourses, setProjects } from "@/lib/store/recume/resumeSlice";
import SectionHeadingAndTips from "@/components/SectionHeadingAndTips";
import { FaAward, FaLaptopCode } from "react-icons/fa";
import BtnLoader from "@/components/BtnLoader";
import { Checkbox } from "@/components/ui/checkbox";
import DontIncludeCheck from "@/components/DontIncludeCheck";

interface ProjectI {
  id?: number;
  projectTitle: string;
  technologyUsed: string;
  projectGithubLink: string;
  projectLink: string;
  projectDescription: string;
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
  const [loading, SetLoading] = useState<boolean>(false);

  const submit = async (data: any) => {
      const projectsData: ProjectI[] = noOfSection.map((n) => ({
        id: n,
        projectTitle: data[`projectTitle${n}`],
        technologyUsed: data[`technologyUsed${n}`],
        projectGithubLink: data[`projectGithubLink${n}`],
        projectLink: data[`projectLink${n}`],
        projectDescription: data[`projectDescription${n}`],
      }));
      dispatch(setProjects(projectsData));
  
    router.push("/build-resume/");
    SetLoading(true);
  };

  const submitEmpty = () => {
    dispatch(setProjects([]));
    router.push("/build-resume/");
    SetLoading(true);
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-[cadetblue]/10 py-2 md:py-6">
      <Container>
        <div className="p-4 sm:p-6 md:9 lg:p-12 max-w-5xl w-full mx-auto rounded-lg bg-white ">
          <form onSubmit={handleSubmit(submit)} className="flex flex-col">
            <div className="mb-10">
              <SectionHeadingAndTips
                id={7}
                title="Projects"
                description="Notable personal and professional projects"
                Icon={FaLaptopCode}
                tips={[
                  "Highlight relevant projects",
                  "Include technologies used",
                  "Describe impact and results",
                  "Add live project links",
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              {noOfSection.map((n, k) => (
                <div key={k}>
                  <Section
                    register={register}
                    errors={errors}
                    input1={["Project Title", "", `projectTitle${n}`, true]}
                    input2={[
                      "Technologies Used",
                      "Keep separated by comma (,)",
                      `technologyUsed${n}`,
                      true,
                    ]}
                    input3={[
                      "Github Link (Optional)",
                      "",
                      `projectGithubLink${n}`,
                      false,
                    ]}
                    input4={[
                      "Project Link (Optional)",
                      "",
                      `projectLink${n}`,
                      false,
                    ]}
                    textarea1={[
                      "Description",
                      "",
                      `projectDescription${n}`,
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
            <div className="w-full flex max-sm:justify-center justify-between items-center   mt-6 sm:mt-4 ">
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
                Get Resume {loading && <BtnLoader />}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Page;
