import React from "react";
import { navbarMenu } from "../mockData/data";
import SocialLinks from "./SocialLinks";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
export default function Footer() {
  return (
    <div className="bg-[#1B1B1B] py-10">
      <div className="text-center">
        <h1 className="lg:order-1 order-2 text-4xl font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
          Kovith
        </h1>
      </div>
      <div className="mt-12">
        <ul className="flex justify-center items-center md:gap-5 gap-1">
          {navbarMenu.map((item) => (
            <li
              key={item.id}
              className="md:mx-5 md:text-lg mx-2 text-md text-[#959595]"
            >
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex justify-center items-center gap-6 my-3 pb-2">
          <SocialLinks />
        </div>
      </div>
      <div className="text-[#707070] font-bold flex sm:flex-row flex-col items-center justify-center sm:gap-10 gap-5">
        <div className="flex justify-center items-center gap-2 mt-5">
          <img src={mail} alt="" />
          <p>kovithkovi123@gmail.com</p>
        </div>
        <div className="flex justify-center items-center gap-2 mt-5">
          <img src={phone} alt="" />
          <p>+91 9392867403</p>
        </div>
      </div>
    </div>
  );
}
