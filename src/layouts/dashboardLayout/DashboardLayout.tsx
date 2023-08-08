import React from 'react'
import './DashboardLayoutStyles.scss'
import { Outlet } from "react-router";
import { RequireAuth } from '../../HoC/RequireAuth';

const DashboardLayout = () => {
    return (
        <RequireAuth>
            <Outlet />
        </RequireAuth>
    )
}

export default DashboardLayout