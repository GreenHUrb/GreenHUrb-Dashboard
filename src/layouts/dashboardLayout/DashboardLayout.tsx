// import Styles
import './DashboardLayoutStyles.scss'

// import libraries
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Outlet } from "react-router";

// import custom components
// import { RequireAuth } from '../../HoC/RequireAuth';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import { IPage } from '../../redux/pageInfoSlice';

// iport custom hooks
import { usePageInfoActions } from '../../hooks/useReduxActions';
import useScreenSize from '../../hooks/useScreenSize';

const DashboardLayout = () => {
    const location = useLocation()
    const { setCurrentPage } = usePageInfoActions()
    useScreenSize()

    const handleSetCurrentPath = () => {
        const currentPath = location.pathname.split('/')[1]
        if (currentPath) {
            setCurrentPage(currentPath as IPage)
        } else {
            setCurrentPage('Dashboard')
        }
    }

    useEffect(() => {
        handleSetCurrentPath()
    }, [location])
    return (
        // <RequireAuth>
        <div className="dashboard_layout">
            <Sidebar />
            <div className="dashboard_content">
                <div className='dashboard_content_inner_container'>
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </div>
        // </RequireAuth>
    )
}

export default DashboardLayout