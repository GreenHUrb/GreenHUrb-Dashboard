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
    const navigate = useNavigate()
    const goToPage = (page: string) => () => navigate(page);
    const { toggleSidebar } = usePageInfoActions()

    const { sidebarStatus, isMobile } = useAppSelector(state => state.pageInfo)

    const handleLogout = () => {

    }

    return (
        <div className={`dashboard_sidebar ${sidebarStatus ? 'dashboard_sidebar_open' : 'dashboard_sidebar_close'}`}>
            <div className="dashboard_sidebar_container">
                {isMobile && (
                    <button className='dashboard_sidebar_close_icon' onClick={() => toggleSidebar(false)}>
                        <img src={CloseIcon} />
                    </button>
                )}
                <div>
                    <div onClick={() => navigate(AllRouteConstants.main.index)} className="dashboard_sidebar_logo">
                        <img src={LogoIcon} alt="logo" />
                    </div>

                    <div className="dashboard_sidebar_items">
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
                    <SidebarItem
                        onClick={goToPage(AllRouteConstants.settings.index)}
                        sidebarIcon={SettingsIcon}
                        sidebarIconActive={SettingsIconActive}
                        sidebarItemName="Settings"
                    />

                    <SidebarItem
                        onClick={handleLogout}
                        sidebarIcon={LogoutIcon}
                        sidebarItemName="Logout"
                        isLogout
                    />
                </div>
            </div>
        </div>
    )
}

export default Sidebar