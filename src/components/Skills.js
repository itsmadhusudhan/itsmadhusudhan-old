import React from "react";
import Skill from "./Skill";
import idea from "../images/idea.webp";
import ideapng from "../images/idea.png";

const Skills = props => {
  const skilldata = [
    {
      title: "Writing Human Readable code",
      description:
        "I code for humans. You can find comments where ever its necessary in my code."
    },
    {
      title: "Structured and clean HTML5",
      description: "I write structured html following the modern web standards."
    },
    {
      title: "Cool CSS3",
      description: "I just love CSS. Especially CSS animations are just cool..."
    },
    {
      title: "Modularity with Sass",
      description: "Sass is even more fun to play with. It has given me a way to split css into different files, mixins to reduce the time and effort in coding."
    },
    {
      title: "Going Functional with Javascript",
      description:
        "I find I have more freedom when writing Javascript because it don't impose a particular style."
    },
    {
      title: "My Magical Horse React js",
      description: "React didn't just come as just a library but also showed a new component paradigm to build web apps. This site itself is powered by React."
    },
    {
      title: "Maintaining versions",
      description: "Initialising git is the first I do in all my projects. It's like a journal for me to be accountable."
    }
  ];

  return (
    <section id="my-skills">
      <h2 className="heading">I'm Good at</h2>
      <div className="skills__wrapper">
        <div className="idea__wrapper">
          <picture>
            <source srcSet={idea} type="image/webp" />
            <img src={ideapng} alt="skills" className="idea__img" />
          </picture>
        </div>

        <div className="skills">
          {skilldata.map((skill, index) => {
            return <Skill skill={skill} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
