import React from "react";

const Skill = props => {
  return (
    <div className="skill">
      <h3 className="skill__title">{props.skill.title}</h3>
      <p className="skill__description">
        {props.skill.description}
      </p>
    </div>
  );
};


export default Skill;