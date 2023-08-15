import React from 'react'
import { usePageInfoActions } from '../../../hooks/useReduxActions'

const Navbar = () => {
    const { toggleSidebar } = usePageInfoActions()
    return (
        <div onClick={() => toggleSidebar(true)}>Navbar</div>
    )
}

export default Navbar