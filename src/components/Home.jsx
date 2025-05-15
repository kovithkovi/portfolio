import React from "react";
import photo from "../assets/Photo.png"; // Corrected to use correct names
import SocialLinks from "./SocialLinks";

function Home() {
  const handleDownload = () => {
    // Logic to download the CV
    const link = document.createElement("a");
    link.href = "../public/resume1.pdf"; // Replace with the actual path to your CV
    link.download = "Kovith_CV.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex lg:flex-row justify-center mb-22 flex-col">
      {/* Text Section with soft background gradient */}
      <div className="lg:w-1/2 lg:mt-[100px] lg:p-8 lg:relative ">
        {/* Background gradient that fades out */}
        <div
          className="absolute inset-0 z-0 rounded-lg"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(253,111,0,0.1) 0%, rgba(253,111,0,0.02) 30%, transparent 100%)",
            pointerEvents: "none",
            // move right by 20px and up by 20px
          }}
        />

        {/* Content above the gradient */}
        <div className="relative z-10">
          <p className="text-[#707070] text-2xl text-center lg:text-left">
            Hi I am
          </p>
          <p className="text-[#707070] font-bold text-3xl text-center lg:text-left ">
            Chinthala Kovith
          </p>
          <p className="md:text-6xl text-5xl text-center lg:text-left font-bold text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text mt-2 pb-2">
            Software Engineer
          </p>
          <div>
            <div className="flex lg:justify-start justify-center items-center gap-6 my-3 pb-2">
              <SocialLinks />
            </div>
          </div>
          <div className="mt-5 flex gap-7 lg:justify-start justify-center">
            <button
              onClick={handleDownload}
              className="bg-transparent text-lg font-bold border-2 border-[#707070] text-[#707070] rounded-lg hover:bg-[#FA6E00] hover:text-white flex justify-center items-center py-1 px-10 cursor-pointer transition duration-300 ease-in-out"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/4 flex justify-center items-center">
        <img
          src={photo}
          alt="Image of Kovith"
          className="max-w-[250px] md:max-w-[400px] h-auto"
        />
      </div>
    </div>
  );
}

export default Home;
