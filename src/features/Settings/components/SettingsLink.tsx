import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import '../styles/settings_styles.scss';

interface SettingsLinkProps {
  path: string;
  name: string;
  description: string;
}

const SettingsLink: React.FC<SettingsLinkProps> = ({ path, name, description }) => {
  return (
    <Link to={path}>
      <div>
        <h2>{name}</h2>
        <MdOutlineKeyboardArrowRight />
      </div>
      <p>{description}</p>
    </Link>
  );
};

export default SettingsLink;
