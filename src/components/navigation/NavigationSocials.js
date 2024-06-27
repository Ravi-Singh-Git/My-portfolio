import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Codepen from "../../assets/images/socials/codepen-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/ravi-singh-prof/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/Ravi-Singh-Git"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
      <a
        href="https://codepen.io/ravisinghbm"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Codepen} alt="codepen" />
      </a>
    </section>
  );
};

export default NavigationSocials;
