import { Footer } from "../../components/index.js";
import Certifications from "./Certifications.js";
import Languages from "./Languages.js";
import Stack from "./Stack.js";
import Education from "./Education.js";
import WorkExperience from "./WorkExperience.js";
import DownloadResume from "./DownloadResume.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About | Ravi Singh";
  })
  return (
    <article className="about-main">
      <AboutMe />
      <Stack />
      <DownloadResume />
      <WorkExperience />
      <Education />
      <Languages />
      <DownloadResume />
      <Certifications />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default About;
