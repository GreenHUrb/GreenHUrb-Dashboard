import React, { useState } from 'react'
import '../styles/DashboardHomeStyles.scss'
import KpiBalanceCard from '../components/KpiBalanceCard/KpiBalanceCard'
export const Home = () => {
    
    return (
        <div className='dashboard_home'>
            <div className="dashboard_home_top">
                <div className="dashboard_home_top_left">
                    <div className="dashboard_home_top_left_kpi_cards">
                        <KpiBalanceCard cardAmount='0.00' cardHeading='Wallet Balance' shadowColor='#053C7C' />
                        <KpiBalanceCard cardAmount='0.00' cardHeading="Today's Balance" shadowColor='#F2C570' />

                    </div>

                </div>
                <div className="dashboard_home_top_right"></div>
            </div>
        </div>
    )
}

