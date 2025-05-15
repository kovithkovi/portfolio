import React from "react";
import photo2 from "../assets/photo2.png";
export default function About() {
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
    <div id="about" className="mb-20">
      <div className="flex flex-col">
        <p className="text-center text-4xl text-white">About Me</p>
        <p className="text-center text-xl text-[#707070] mt-7 mx-auto lg:mx-6">
          I'm a passionate developer with expertise in front-end, back-end
          technologies, and cybersecurity, creating responsive, secure, and
          user-centric web applications.
        </p>
      </div>
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-10">
        <div className="lg:w-2/3 lg:mt-10 lg:ml-[150px] mt-7 order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start">
          <p className="text-center text-justify text-xl text-[#707070] mt-7 xl:px-2 px-6">
            I'm a dedicated and versatile developer with a strong foundation in
            both frontend and backend technologies, as well as hands-on
            experience in cybersecurity. I specialize in building responsive and
            user-friendly interfaces using HTML, CSS, JavaScript, React, and
            Tailwind CSS, while also developing robust backend systems with
            Node.js, MongoDB, and Django. Alongside web development, I have a
            solid understanding of cybersecurity principles, including API
            security (OWASP API Top 10), network scanning, vulnerability
            assessment, and privilege escalation. With tools like Nmap, Burp
            Suite, and Metasploit, I focus on identifying and mitigating
            security threats through secure coding practices. I'm also
            experienced with version control using Git and backend testing
            frameworks such as JUnit 5 and Mockito. In addition, I’ve worked
            with cloud tools like the AWS SDK and used build tools like Maven,
            enabling me to deploy scalable and maintainable applications. I
            thrive on solving complex problems, continuously learning, and
            contributing to secure, high-quality software solutions.
          </p>
          <div className="flex justify-center items-center mt-10 lg:justify-start lg:mt-2">
            <button
              onClick={handleDownload}
              className="bg-[#FA6E00] mt-10 text-lg text-white font-semibold rounded-lg hover:bg-[#E46400] py-1 px-10 cursor-pointer transition duration-300 ease-in-out"
            >
              Download CV
            </button>
          </div>
        </div>

        <div className="lg:w-1/3 w-[400px] -mt-7 flex justify-center items-center order-1 lg:order-2">
          <img
            src={photo2}
            alt=""
            className="max-w-[250px] lg:max-w-[400px] mt-2 lg:mt-0 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
