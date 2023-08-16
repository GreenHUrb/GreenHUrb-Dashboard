// Import Styles
import './NavbarStyles.scss';

// Import Custom Hooks
import { usePageInfoActions } from '../../../hooks/useReduxActions'; // Custom Redux actions hook
import { useAppSelector } from '../../../hooks/useAppSelector'; // Custom Redux state selector hook

// Import Icons
import Hamburger from '../../../assets/icons/hamburgerIcon.svg';
import Notification from '../../../assets/icons/notificationIcon.svg';
import Profile from '../../../assets/icons/profileIcon.svg';
// Import Custom Components
import SearchInput from '../../../components/NavSearchBar/NavSearchBar';

// Import Libraries
import { useState } from 'react';

const Navbar = () => {
    // Get Redux actions from custom hook
    const { toggleSidebar } = usePageInfoActions();

    // Get relevant Redux state using custom selector hooks
    const { currentPage, isMobile } = useAppSelector((state) => state.pageInfo);

    // State to manage the search bar's open/closed state
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div>
            {/* Main navigation container */}
            <nav className="navbar navbar-flex">
                {/* Left side of the navbar */}
                <div className="navbar-flex">
                    {/* Render the hamburger icon button only on mobile */}
                    {isMobile && (
                        <button className='navbar_icon' onClick={() => toggleSidebar(true)}>
                            <img src={Hamburger} alt='Hamburger' />
                        </button>
                    )}

                    {/* Render the current page title, except when search is open on mobile */}
                    {!(isSearchOpen && isMobile) && (
                        <h2 className='navbar_heading'>{currentPage}</h2>
                    )}
                </div>

                {/* Right side of the navbar */}
                <div className="navbar-flex">
                    {/* TODO: Optimize the Transitioning when it is on Mobile */}
                    {/* Render the search input, and related icons, except when search is open on mobile */}
                    <SearchInput isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
                    {!(isSearchOpen && isMobile) && (
                        <>
                            <button className='navbar_icon notification_icon'>
                                <img src={Notification} alt='Notification' />
                                <div className="notification_count"></div>
                            </button>
                            <button className='navbar_icon'>
                                <img src={Profile} alt='Profile' />
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
