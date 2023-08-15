// Import Styles
import './SidebarStyles.scss'

// Import Libraries
import { useNavigate } from 'react-router-dom'

// import Icons
import LogoIcon from "../../../assets/icons/logo.svg";
import SettingsIcon from "../../../assets/icons/settingsIcon.svg";
import SettingsIconActive from "../../../assets/icons/settingsIconActive.svg";
import LogoutIcon from "../../../assets/icons/logoutIcon.svg";

// Import Custom Components
import SidebarItem from './SidebarItem';
import { sidebarData } from '../../../data/sidebarData';
import { AllRouteConstants } from '../../../router/RouteConstants'

// import custom hooks
import { useAppSelector } from '../../../hooks/useAppSelector';


const Sidebar = () => {
    const navigate = useNavigate()
    const goToPage = (page: string) => () => navigate(page);
    const { sidebarStatus } = useAppSelector(state => state.pageInfo)

    return (
        <div className={` ${sidebarStatus ? 'dashboard_sidebar' : 'dashboard_sidebar_close'}`}>
            <div className="dashboard_sidebar_container">
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
                        onClick={goToPage(AllRouteConstants.products.index)}
                        sidebarIcon={SettingsIcon}
                        sidebarIconActive={SettingsIconActive}
                        sidebarItemName="Settings"
                    />

                    <SidebarItem
                        onClick={goToPage(AllRouteConstants.products.index)}
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