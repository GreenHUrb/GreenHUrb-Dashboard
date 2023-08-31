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
    <Link to={path} className="settings_link">
      <div className="settings_link_content">
        <h2 className="settings_link_name">{name}</h2>
        <p className="settings_link_desc">{description}</p>
      </div>
      <div className="settings_link_icon_container">
        <MdOutlineKeyboardArrowRight className="settings_link_icon" />
      </div>
    </Link>
  );
};

export default SettingsLink;
