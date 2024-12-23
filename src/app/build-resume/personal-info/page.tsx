"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store/hooks";
import { setPersonalInfo } from "@/lib/store/recume/resumeSlice";
import SectionHeadingAndTips from "@/components/SectionHeadingAndTips";
import { FaUser } from "react-icons/fa";
import BtnLoader from "@/components/BtnLoader";
import { ArrowRight } from "lucide-react";

function Page() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const dispatch = useAppDispatch();

  const [img, setImg] = useState<string>("/image.png");
  const [loading,SetLoading] = useState<boolean>(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imgStr = reader.result as string
        setImg(imgStr);
        console.log(imgStr)
       
        setValue("image", imgStr, {
          shouldValidate: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const submit = async (data: any) => {
    console.log("Form Data:", data);
    dispatch(setPersonalInfo(data));
    router.push("/build-resume/professional-summary");
    SetLoading(true)
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-[cadetblue]/10 py-2 md:py-6">
      <Container>
        <div className="p-12 max-w-5xl w-full mx-auto rounded-lg bg-white">
          <form onSubmit={handleSubmit(submit)} className="flex flex-col">
            <div className="mb-10">
              <SectionHeadingAndTips
                id={1}
                title="Personal Details"
                description="Contact information and basic details"
                Icon={FaUser}
                tips={[
                  "Use a professional email address",
                  "Include LinkedIn profile",
                  "Add location (city/state)",
                  "Keep it concise and relevant",
                ]}
              />
            </div>
            <div className="flex gap-10 max-lg:flex-col w-full">
              <div>
                <label htmlFor="profileImage" className="cursor-pointer">
                  <div className="h-32 w-32 bg-[cadetblue] hover:border-[cadetblue] border">
                    <Image
                      src={img || "/image.png"}
                      alt="profile-pic"
                      height={1000}
                      width={1000}
                      className="w-full"
                    />
                    <p className="mx-auto text-[cadetblue] mt-2 text-center">
                      Choose Image
                    </p>
                  </div>
                </label>
                <input
                  type="file"
                  className="hidden"
                  id="profileImage"
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  // {...register("image", {
                  //   required: "Image is required",
                  // })}
                  onChange={handleImageChange}
                />
                {errors.image && (
                  <p className="text-red-600 mt-12">{errors.image.message as string}</p>
                )}
              </div>
              <div id="section1" className="grid grid-cols-1 md:grid-cols-2  flex-1 gap-4">
                <div>
                  <Input
                    label="First Name:"
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-red-600">
                      {errors.firstName.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    label="Last Name:"
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-red-600">
                      {errors.lastName.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    label="Job Title:"
                    type="text"
                    placeholder="Job Title"
                    {...register("jobTitle", {
                      required: "Job title is required",
                    })}
                  />
                  {errors.jobTitle && (
                    <p className="text-red-600">
                      {errors.jobTitle.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    label="Email:"
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    label="Phone:"
                    type="number"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-600">
                      {errors.phone.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    label="LinkedIn:"
                    type="text"
                    placeholder="LinkedIn Profile URL"
                    {...register("linkedin", {
                      required: "LinkedIn profile is required",
                    })}
                  />
                  {errors.linkedin && (
                    <p className="text-red-600">
                      {errors.linkedin.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    label="GitHub:"
                    type="text"
                    placeholder="GitHub Profile URL"
                    {...register("github")}
                  />
                </div>
                <div>
                  <Input
                    label="Personal Website:"
                    type="text"
                    placeholder="Personal Website URL"
                    {...register("personalWebsite")}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row-reverse mt-10">
              <Button
                type="submit" // Ensure the button is of type "submit" to trigger form submission
                className="self-end w-fit"
                size="xl"
                variant={'cadetblue'}
              >
                Next: Professional Summary  {loading ? <BtnLoader /> : <ArrowRight className="w-5 h-5" /> }
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Page;

// 'use client'
// import React, { useState } from 'react';
// import { User, Mail, Phone, Briefcase, Github, Globe, Linkedin, Camera } from 'lucide-react';

// const Page = () => {
//   const [formData, setFormData] = useState({
//     image: '',
//     firstName: '',
//     lastName: '',
//     jobRole: '',
//     email: '',
//     phone: '',
//     linkedin: '',
//     github: '',
//     personalWebsite: ''
//   });

//   const [previewImage, setPreviewImage] = useState('');

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewImage(reader.result as string);
//         // FIXME:
//         setFormData({ ...formData, image: reader.result as string  });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl mx-auto">
//         <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
//           </div>

//           {/* Profile Image Upload */}
//           <div className="flex flex-col items-center mb-6">
//             <div className="relative">
//               <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-2 border-gray-200">
//                 {previewImage ? (
//                   <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
//                 ) : (
//                   <Camera className="w-12 h-12 text-gray-400" />
//                 )}
//               </div>
//               <label
//                 htmlFor="image-upload"
//                 className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"
//               >
//                 <Camera className="w-4 h-4 text-white" />
//               </label>
//               <input
//                 id="image-upload"
//                 type="file"
//                 className="hidden"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </div>
//           </div>

//           {/* Name Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700">First Name</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="John"
//                 />
//               </div>
//             </div>

//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700">Last Name</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Doe"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Job Role */}
//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700">Job Role</label>
//             <div className="mt-1 relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Briefcase className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="jobRole"
//                 value={formData.jobRole}
//                 onChange={handleChange}
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Software Engineer"
//               />
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-6">
//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="john@example.com"
//                 />
//               </div>
//             </div>

//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700">Phone</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Phone className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="+1 (555) 000-0000"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="space-y-6">
//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Linkedin className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="url"
//                   name="linkedin"
//                   value={formData.linkedin}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="https://linkedin.com/in/username"
//                 />
//               </div>
//             </div>

//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700">GitHub Profile</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Github className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="url"
//                   name="github"
//                   value={formData.github}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="https://github.com/username"
//                 />
//               </div>
//             </div>

//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700">Personal Website</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Globe className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="url"
//                   name="personalWebsite"
//                   value={formData.personalWebsite}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="https://yourwebsite.com"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="pt-4">
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Save Profile
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Page;
