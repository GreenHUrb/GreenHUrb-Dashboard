// Impoer Styles
import "./SidebarStyles.scss";

// Import libraries
import React, { useEffect, useState } from "react";

// import custon hooks
import { useAppSelector } from "../../../hooks/useAppSelector";
import { usePageInfoActions } from "../../../hooks/useReduxActions";

interface NavItemProps {
  onClick: VoidFunction;
  sidebarIcon: string;
  sidebarIconActive?: string
  sidebarItemName: string;
  isLogout?: boolean
}

const SidebarItem: React.FC<NavItemProps> = ({
  sidebarIcon,
  sidebarIconActive,
  sidebarItemName,
  onClick,
  isLogout
}) => {
  const { currentPage, isMobile } = useAppSelector(state => state.pageInfo)
  const { toggleSidebar } = usePageInfoActions()
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    if (currentPage.toLocaleLowerCase() === sidebarItemName.toLocaleLowerCase()) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [currentPage])

  const handleOnItemClick = () => {
    if (isMobile) {
      toggleSidebar(false)
    }
    onClick()
  }

  return (
    <div onClick={handleOnItemClick} className={`dashboard_sidebar_item_container ${isActive && "dashboard_sidebar_item_container_active"} ${isLogout && 'dashboard_sidebar_item_container_logout'}`}>
      <div className='dashboard_sidebar_item_icon'>
        {sidebarIconActive && isActive ? (
          <img src={sidebarIconActive} alt={sidebarItemName} />
        ) : (
          <img src={sidebarIcon} alt={sidebarItemName} />
        )}
      </div>
      <span className={`dashboard_sidebar_item_text`}>{sidebarItemName}</span>
    </div>
  );
};

export default SidebarItem;
