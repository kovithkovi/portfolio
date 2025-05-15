import React from "react";

export default function ServiceCard({ service }) {
  return (
    <div className="flex flex-col rounded-xl p-5 justify-center w-[350px] h-[250px] bg-[#1B1B1B] rounded-lg shadow-lg items-center gap-5 ">
      <p className="text-[#FA6E00] text-2xl font-bold">{service.title}</p>
      <p className="text-[#575757] text-lg text-center">
        {service.description}
      </p>
    </div>
  );
}
