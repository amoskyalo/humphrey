import React from "react";

const Contact = () => {
  return (
    <section className="px-2 xl:px-0 border-t border-gray-700 border-dashed py-16" id="contact">
      <h2
        className="cursor-pointer relative text-4xl font-extrabold before:h-[5%] before:top-12 before:w-[55%] hover:before:w-[10%] 
        before:duration-1000 before:block before:absolute before:bg-current md:before:w-[20%]"
      >
        Contact me
      </h2>
      <p className="mt-5">
        {" "}
        If you have any questions or would like to discuss any potential
        projects, please don't hesitate to reach out. Go ahead. I'll always
        respond as soon as possible. My inbox is open for business, whether you
        have a question or just want to say hello. You can also hit me up for
        collaborations. I am always willing to collaborate in other people's
        project ideas. You can contact me by email, phone, or social media
        links. I look forward to hearing from you!
      </p>
      <div className="flex flex-row items-center mt-5 space-x-5">
        <a
          href="mailto:humphreyomukaga@gmail.com"
          className="border bg-white text-[#1e293b] py-2 px-5 rounded-xl font-semibold"
        >
          Send Email
        </a>
        <p className="font-semibold text-lg">Or</p>
        <a
          href="tel:254745048120"
          className="border bg-white text-[#1e293b] py-2 px-5 rounded-xl font-semibold"
        >
          Make a Call
        </a>
      </div>
    </section>
  );
};

export default Contact;
