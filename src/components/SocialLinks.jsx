import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.svg";

function SocialLinks() {
  return (
    <div className="flex items-center gap-5 mt-6">
      {/* LinkedIn Link */}
      <a
        href="https://www.linkedin.com/in/chinthala-kovith-7a44752b5/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
      </a>

      {/* Instagram Link */}
      <a
        href="https://www.instagram.com/mr_kovith"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <img src={insta} alt="Instagram" className="w-8 h-8" />
      </a>
    </div>
  );
}

export default SocialLinks;
