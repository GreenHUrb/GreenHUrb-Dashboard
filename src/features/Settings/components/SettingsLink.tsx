import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import "../styles/settings_styles.scss";

interface SettingsLinkProps {
  path: string;
  name: string;
  description: string;
}

const SettingsLink: React.FC<SettingsLinkProps> = ({ path, name, description }) => {
  return (
    <div  className="settings_link">
      <Link to={path}>
        <div>
          <p className="settings_link_name">{name}</p>
          <MdOutlineKeyboardArrowRight style={{fontSize: '1.5rem', color: 'rgba(0 0 0 / .5)'}} />
        </div>
        <p className="settings_link_desc">{description}</p>
      </Link>
    </div>
  );
};

export default SettingsLink;
