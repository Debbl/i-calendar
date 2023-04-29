import githubIcon from "../assets/github.svg";

const Footer: React.FC = () => {
  return (
    <div className="mb-3 mt-16 flex justify-center">
      <a href="https://github.com/Debbl/i-calendar">
        <img src={githubIcon} alt="github" className="w-6" />
      </a>
    </div>
  );
};

export default Footer;
