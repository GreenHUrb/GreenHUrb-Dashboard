// Import Styles
import './NavSearchBarStyles.scss'

// Import Libraries
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';

// Import Icons
import Search from '../../assets/icons/searchIcon.svg'
import SearchActive from '../../assets/icons/searchIconActive.svg'

// Import Custom Hooks
import { useAppSelector } from '../../hooks/useAppSelector';

interface ISearchInputProps {
    setIsSearchOpen: Dispatch<SetStateAction<boolean>>
    isSearchOpen: boolean
}
const SearchInput = (props: ISearchInputProps) => {
    const { isMobile } = useAppSelector(state => state.pageInfo)
    const { setIsSearchOpen, isSearchOpen } = props

    const handleToggleSearch = () => {
        if (isMobile) {
            setIsSearchOpen(!isSearchOpen);
        }
    };

    useEffect(() => {
        if (!isMobile) {
            setIsSearchOpen(true)
        } else {
            setIsSearchOpen(false)
        }
    }, [isMobile])

    return (
        <div className={`search_input_box ${isSearchOpen ? 'open' : ''}`}>
            <span className="search" onClick={handleToggleSearch}>
                <img src={isSearchOpen ? SearchActive : Search} />
            </span>
            <input type="text" className='search' placeholder="Search Settings" />
        </div>
    );
};

export default SearchInput;
