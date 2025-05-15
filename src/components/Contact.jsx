import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(); // useRef for actual form DOM

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ld7pdd",
        "template_kfvaxao",
        formRef.current, // ✅ pass the actual form element
        "ovgkkRPJ_J1meZzrb"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div id="contact">
      <div>
        <p className="text-center text-4xl text-white">Contact Me</p>
        <p className="text-center text-xl text-[#707070] mt-7 mx-auto">
          Cultivating Connections: Reach Out and Connect with Me
        </p>
      </div>
      <div>
        <form
          ref={formRef} // ✅ attach ref here
          onSubmit={sendEmail}
          autoComplete="off"
          className="flex flex-col items-center mt-10 mb-10"
        >
          <input
            type="text"
            name="name" // ✅ Add name attribute
            placeholder="Name"
            className="w-[400px] h-[50px] rounded-[5px] border border-[#707070] p-4 mb-4 placeholder-[#707070] text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-[400px] h-[50px] rounded-[5px] border border-[#707070] p-4 mb-4 placeholder-[#707070] text-white"
            required
          />
          <textarea
            name="message" // ✅ Add name attribute
            placeholder="Message"
            className="w-[400px] h-[100px] rounded-[5px] border border-[#707070] p-4 mb-4 placeholder-[#707070] text-white"
            required
          ></textarea>
          <button className="bg-[#FF3D00] text-white w-[150px] h-[50px] rounded-[5px] my-10">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
