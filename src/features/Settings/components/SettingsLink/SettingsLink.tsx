import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import "./SettingsLinkStyles.scss";

interface SettingsLinkProps {
  path: string;
  name: string;
  description: string;
}

const SettingsLink: React.FC<SettingsLinkProps> = ({ path, name, description }) => {
  return (
    <div className="settings_link">
      <Link to={path}>
        <div>
          <h2 className="settings_link_name">{name}</h2>
          <MdOutlineKeyboardArrowRight className="settings_link_icon"/>
        </div>
        <p className="settings_link_desc">{description}</p>
      </Link>
    </div>
  );
};

export default SettingsLink;
