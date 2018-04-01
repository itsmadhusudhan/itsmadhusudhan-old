import React from "react";
import Skill from "./Skill";
import idea from "../images/idea.webp";
import ideapng from "../images/idea.png";

const Skills = props => {
  const skilldata = [
    {
      key: 1,
      title: "Human Readable code",
      description:
        "I code for humans. I like to write comments where necessary."
    },
    {
      key: 2,
      title: "Structured and clean HTML5",
      description: "I write structured html following the modern web standards"
    },
    {
      key: 3,
      title: "Modular CSS3",
      description: "I just love CSS. Especially CSS animations are just cool..."
    },
    {
      key: 4,
      title: "Functional Javascript",
      description:
        "I find I have more freedom when writing Javascript because it don't impose a style. ES6 has added more power to the web with new features."
    },
    {
      key: 5,
      title: "Magical React js",
      description: "Components are the powerhouses"
    },
    {
      key: 6,
      title: "Maintaining versions",
      description: "I use git for this."
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
        {skilldata.map(skill => {
          return <Skill skill={skill} key={skill.key} />;
        })}
      </div>
      </div>
    </section>
  );
};

export default Skills;
