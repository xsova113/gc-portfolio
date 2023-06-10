import Form from "./components/Form";

const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col pt-32 items-center ">
      <h1 className="text-center font-bold text-4xl">
        Contact Me
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0" />
      </h1>

      <div className="flex flex-col gap-4 md:gap-10 text-stone-500 pt-10 md:pt-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <div className="w-[300px] py-8 pl-8 rounded-lg bg-orange-100 dark:bg-orange-800 dark:text-stone-100">
            georgechangh@gmail.com
          </div>
          <div className="w-[300px] py-8 pl-8 rounded-lg bg-stone-100 dark:bg-stone-600 dark:text-stone-100">
            +1(778)855-3815
          </div>
        </div>
      </div>
      <Form />
    </section>
  );
};

export default ContactSection;
