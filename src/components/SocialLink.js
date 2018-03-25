import React from "react";

const SocialLink = props => {
  return (
    <a
      href={props.url}
      class={props.icon}
      target="_blank"
    >
      <i class={props.fa} />
    </a>
  );
};

export default SocialLink;
