import ServiceCard from "./ServiceCard";
import { services } from "../mockData/data";
function Service() {
  return (
    <div>
      <div id="skills" className="flex flex-col justify-center mt-[100px]">
        <p className="text-center text-4xl text-white">Skills</p>
        <p className="text-center text-xl text-[#707070] mt-7 mx-auto">
          I'm a passionate developer skilled in building user-friendly digital
          solutions with a focus on clean code and continuous learning.
        </p>
      </div>

      <div className="w-full max-w-[1150px] mb-[100px] mt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto justify-items-center">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Service;
