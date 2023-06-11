import Form from "./components/Form";
import { IoMailOpen, IoLogoWhatsapp } from "react-icons/io5";

const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col pt-32 items-center ">
      <h1 className="text-center font-bold text-4xl">
        Contact Me
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0" />
      </h1>

      <div className="flex flex-col gap-4 md:gap-10 text-stone-500 pt-10 md:pt-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <div className="flex max-md:pl-4 md:justify-center w-[300px] py-8 rounded-lg bg-orange-100 dark:bg-orange-800 dark:text-stone-100">
            <span className="flex items-center gap-3">
              <IoMailOpen size={50} color="orange" />
              georgechangh@gmail.com
            </span>
          </div>
          <div className="flex max-md:pl-4 md:justify-center w-[300px] py-8 rounded-lg bg-stone-100 dark:bg-stone-600 dark:text-stone-100">
            <span className="flex items-center gap-3">
              <IoLogoWhatsapp size={50} color="green" />
              +1(778)855-3815
            </span>
          </div>
        </div>
      </div>
      <Form />
    </section>
  );
};

export default ContactSection;
