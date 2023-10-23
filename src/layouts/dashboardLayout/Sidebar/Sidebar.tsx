// Import Styles
import "./SidebarStyles.scss";

// Import Libraries
import { useNavigate } from "react-router-dom";

// import Icons
import LogoIcon from "@icons/logo.svg";
import SettingsIcon from "@icons/settingsIcon.svg";
import SettingsIconActive from "@icons/settingsIconActive.svg";
import LogoutIcon from "@icons/logoutIcon.svg";
import CloseIcon from "@icons/closeIcon.svg";

// Import Custom Components
import SidebarItem from "./SidebarItem";
import { sidebarData } from "@data";
import { AllRouteConstants } from "@router";

// import custom hooks
import { useAppSelector, useAppActions, useApi, useAuthActions } from "@hooks";
import { Services } from "@/services";
import { makeToast } from "@/libs";
import { useState } from "react";
import { Logout } from "@/components";

const Sidebar = () => {
  const navigate = useNavigate();
  const goToPage = (page: string) => () => navigate(page);

  const { toggleSidebar } = useAppActions();

  const { sidebarStatus, isMobile } = useAppSelector(state => state.appSlice);

  const [logOut, setLogOut] = useState(false);

  return (
    <div
      className={`dashboard_sidebar ${
        sidebarStatus ? "dashboard_sidebar_open" : "dashboard_sidebar_close"
      }`}
    >
      {logOut && <Logout onClose={() => setLogOut(false)} />}
      <div className="dashboard_sidebar_container">
        {isMobile && (
          <button className="dashboard_sidebar_close_icon" onClick={() => toggleSidebar(false)}>
            <img src={CloseIcon} alt="Close" />
          </button>
        )}
        <div>
          <div
            onClick={() => navigate(AllRouteConstants.main.index)}
            className="dashboard_sidebar_logo"
          >
            <img src={LogoIcon} alt="logo" />
          </div>

          <div className="dashboard_sidebar_items">
            {/* Mapping through sidebar data to render sidebar items */}
            {sidebarData.map((item, index) => (
              <SidebarItem
                key={index}
                onClick={goToPage(item.route)}
                sidebarIcon={item.icon}
                sidebarItemName={item.sidebarName}
                sidebarIconActive={item.iconActive}
              />
            ))}
          </div>
        </div>
        <div className="dashboard_sidebar_items dashboard_sidebar_items_bottom ">
          {/* Sidebar item for settings */}
          <SidebarItem
            onClick={goToPage(AllRouteConstants.settings.index)}
            sidebarIcon={SettingsIcon}
            sidebarIconActive={SettingsIconActive}
            sidebarItemName="Settings"
          />

          {/* Sidebar item for logout */}
          <SidebarItem
            onClick={() => setLogOut(true)}
            sidebarIcon={LogoutIcon}
            sidebarItemName="Log out"
            isLogout
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
