import React from "react";

const SocialLink = props => {
  return (
    <a
      href={props.url}
      className={props.icon}
      target="_blank"
    >
      <i className={props.fa} />
    </a>
  );
};

export default SocialLink;
