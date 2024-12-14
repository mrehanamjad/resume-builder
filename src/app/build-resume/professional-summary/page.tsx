"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import {
  setAboutMe,
} from "@/lib/store/recume/resumeSlice";
import SectionHeadingAndTips from "@/components/SectionHeadingAndTips";
import {  FaFileAlt } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import BtnLoader from "@/components/BtnLoader";

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
  const [loading,SetLoading] = useState<boolean>(false);

  const submit = async (data: any) => {
    console.log("Form Data:", data);

    const aboutMeData: string = data.aboutMe;

    dispatch(setAboutMe(aboutMeData));
    router.push("/build-resume/education");
    SetLoading(true)
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-[cadetblue]/10 py-2 md:py-6">
      <Container>
        <div className="p-4 sm:p-6 md:9 lg:p-12 max-w-5xl w-full mx-auto rounded-lg bg-white ">
          <form onSubmit={handleSubmit(submit)} className="flex flex-col">
            <div className="mb-10">
              <SectionHeadingAndTips
                id={2}
                title="Professional Summary"
                description="Brief overview of your career and expertise"
                Icon={FaFileAlt}
                tips={[
                  "Keep it under 4 sentences",
                  "Highlight key achievements",
                  "Use industry keywords",
                  "Customize for each application",
                ]}
              />
            </div>
            <div className="mb-4">
            {errors.aboutMe && (
          <p className="text-red-600 mb-1">
            {errors.aboutMe.message as string}
          </p>
        )}
              <Textarea
                placeholder="Write here... "
                className="shadow-md p-3 h-60 px-4 focus:shadow-xl"
                {...register('aboutMe',{required: 'Professional Summary is Required'})}
                maxLength={875}
              />
           
            </div>
            <div className="w-full flex max-sm:justify-center  flex-row-reverse mt-6 sm:mt-4 ">
              <Button
                type="submit" 
                className="self-end w-full sm:w-fit"
                size="xl"
                variant={"cadetblue"}
              >
                Next: Education {loading && <BtnLoader /> }
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Page;
