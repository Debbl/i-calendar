import githubIcon from "../assets/github.svg";

const Footer: React.FC = () => {
  return (
    <div className="mt-16 flex justify-center">
      <a href="https://github.com/Debbl/i-calendar">
        <img src={githubIcon} alt="github" className="w-8" />
      </a>
    </div>
  );
};

export default Footer;
