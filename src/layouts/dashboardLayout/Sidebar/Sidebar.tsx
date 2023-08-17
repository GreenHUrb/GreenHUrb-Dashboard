// Import Styles
import './SidebarStyles.scss'

// Import Libraries
import { useNavigate } from 'react-router-dom'

// import Icons
import LogoIcon from "../../../assets/icons/logo.svg";
import SettingsIcon from "../../../assets/icons/settingsIcon.svg";
import SettingsIconActive from "../../../assets/icons/settingsIconActive.svg";
import LogoutIcon from "../../../assets/icons/logoutIcon.svg";
import CloseIcon from '../../../assets/icons/closeIcon.svg'

// Import Custom Components
import SidebarItem from './SidebarItem';
import { sidebarData } from '../../../data/sidebarData';
import { AllRouteConstants } from '../../../router/RouteConstants'

// import custom hooks
import { useAppSelector } from '../../../hooks/useAppSelector';
import { usePageInfoActions } from '../../../hooks/useReduxActions';


const Sidebar = () => {
    // Get the navigation function from the router library
    const navigate = useNavigate();

    // Function to generate navigation callback for specific pages
    const goToPage = (page: string) => () => navigate(page);

    // Get Redux actions from custom hook
    const { toggleSidebar } = usePageInfoActions();

    // Get relevant Redux state using custom selector hooks
    const { sidebarStatus, isMobile } = useAppSelector(state => state.pageInfo);

    // function for handling logout
    const handleLogout = () => {
        // Implement logout logic here
    };

    return (
        // Sidebar container with dynamic classes based on sidebar status
        <div className={`dashboard_sidebar ${sidebarStatus ? 'dashboard_sidebar_open' : 'dashboard_sidebar_close'}`}>
            <div className="dashboard_sidebar_container">
                {/* Render close icon button only on mobile */}
                {isMobile && (
                    <button className='dashboard_sidebar_close_icon' onClick={() => toggleSidebar(false)}>
                        <img src={CloseIcon} alt="Close" />
                    </button>
                )}
                <div>
                    {/* Logo that navigates to the main page */}
                    <div onClick={() => navigate(AllRouteConstants.main.index)} className="dashboard_sidebar_logo">
                        <img src={LogoIcon} alt="logo" />
                    </div>

                    <div className="dashboard_sidebar_items">
                        {/* Mapping through sidebar data to render sidebar items */}
                        {sidebarData.map((item) => (
                            <SidebarItem
                                onClick={goToPage(item.route)}
                                sidebarIcon={item.icon}
                                sidebarItemName={item.sidebarName}
                                sidebarIconActive={item.iconActive}
                            />
                        ))}
                    </div>
                </div>
                <div className='dashboard_sidebar_items dashboard_sidebar_items_bottom '>
                    {/* Sidebar item for settings */}
                    <SidebarItem
                        onClick={goToPage(AllRouteConstants.settings.index)}
                        sidebarIcon={SettingsIcon}
                        sidebarIconActive={SettingsIconActive}
                        sidebarItemName="Settings"
                    />

                    {/* Sidebar item for logout */}
                    <SidebarItem
                        onClick={handleLogout}
                        sidebarIcon={LogoutIcon}
                        sidebarItemName="Logout"
                        isLogout
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar