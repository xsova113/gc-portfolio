"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "@prisma/client";
import saveData from "@/app/server/saveData";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<User> = (data) => {
    saveData(data)
      .then(() => toast.success("Message sent successfully!🥳"))
      .catch((err) => toast.error("Error:" + err.message));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col justify-center gap-10 pt-16 w-full md:w-[65%]"
    >
      <Toaster />
      <div className="flex items-center bg-stone-100 dark:bg-stone-600  rounded-lg justify-between">
        <label className="pl-4 text-stone-500 dark:text-stone-100">
          Your Name
        </label>
        <input
          {...register("name", { required: "This field is empty" })}
          className="w-[80%] bg-transparent py-4 outline-none"
        />
      </div>
      <i
        className={`${
          errors.name?.message
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        } transition text-red-500 text-sm -mt-10 ml-4`}
      >
        {errors.name?.message}
      </i>

      <div className="flex items-center bg-stone-100 dark:bg-stone-600  rounded-lg justify-between">
        <label className="pl-4 text-stone-500 dark:text-stone-100">
          Your Email
        </label>
        <input
          {...register("email", {
            required: "This field is empty",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Please enter a valid email address",
            },
          })}
          className="w-[80%] bg-transparent py-4 outline-none"
        />
      </div>
      <i
        className={`${
          errors.email?.message
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        } transition text-red-500 text-sm -mt-10 ml-4`}
      >
        {errors.email?.message}
      </i>

      <div className="flex bg-stone-100 dark:bg-stone-600 rounded-lg justify-between">
        <label className="pl-4 pt-4 text-stone-500 dark:text-stone-100">
          Your Message
        </label>
        <textarea
          {...register("message", {
            required: "This field is empty",
          })}
          rows={6}
          className="w-[80%] bg-transparent py-4 outline-none "
        />
      </div>
      <i
        className={`${
          errors.message?.message
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        } transition text-red-500 text-sm -mt-10 ml-4`}
      >
        {errors.message?.message}
      </i>

      <button
        type="submit"
        className="mt-6 mx-auto text-stone-100 bg-orange-500 px-8 py-4 rounded-lg"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
