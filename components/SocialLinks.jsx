import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      <Button
        className="btn-icon-only rounded-circle"
        color="twitter"
        href={socialLinks.email}
        target="_blank"
        rel="noopener"
        aria-label="email"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-envelope" />
        </span>
      </Button>

      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="twitter"
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener"
        aria-label="Linkedin"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-linkedin" />
        </span>
      </Button>

      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="github"
        href={socialLinks.github}
        target="_blank"
        rel="noopener"
        aria-label="github"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-github" />
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="twitter"
        rel="noopener"
        aria-label="twitter"
        href={socialLinks.twitter}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-twitter" />
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="instagram"
        href={socialLinks.instagram}
        rel="noopener"
        aria-label="instagram"
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-instagram" />
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="facebook"
        rel="noopener"
        aria-label="facebook"
        href={socialLinks.facebook}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-facebook-square" />
        </span>
      </Button>
    </div>
  );
};

export default SocialLinks;
