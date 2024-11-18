'use client'
import React from "react";
import Container from "./Container";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    watch, // to monitor field continuosly
    setValue,
    control, // we pass this control as it is in our RTE.jsx
    getValues, // to grap values of all form
    formState: { errors },
  } = useForm();

  const submit = async (data: any) => {
    // Do something with form data
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center bg-red-300">
      <Container>
        <div className="p-12 bg-white">
          <form action="">
            <div id="section1" className="grid grid-cols-2 gap-4">
              <Input label="First Name: " type="text" placeholder="First Name" {...register("firstName", { required: "first name is required" })} />
              <Input label="Last Name: " type="text" placeholder="Last Name" {...register("lastName", { required: "LastName is required" })}/>
              <Input label="Email: " type="email" placeholder="Email." {...register("email", { required: "email is required" })}/>
              <Input label="Phone: " type="number" placeholder="Phone Number" {...register("lastName", { required: "LastName is required" })}/>

            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Form;
