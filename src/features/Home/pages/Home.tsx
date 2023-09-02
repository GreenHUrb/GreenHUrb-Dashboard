import React from 'react';
import '../styles/DashboardHomeStyles.scss';
import KpiBalanceCard from '../components/KpiBalanceCard/KpiBalanceCard';
import Overview from '../components/Overview/Overview';
import DashboardNotification from '../components/DashboardNotification/DashboardNotification';
import MedalIcon from '../../../assets/icons/MedalIcon.svg';
import AccVerification from '../../../assets/icons/AccountVerificationIcon.svg';
import { AllRouteConstants } from '../../../router/RouteConstants';
import TopProducts from '../components/TopProducts/TopProducts';
import TransactionTable from '../components/Tables/TransactionTable';
import { dummyTransactions } from '../data/dummyTransactions';

export const Home = () => {
    const walletBalance = '100,000.00';
    const todaysBalance = '35,000.00';

    const accountVerificationData = {
        buttonLabel: 'Go to Settings',
        content: 'Your account is not fully set up. Go to settings to complete set up',
        header: 'Account Verification',
        icon: AccVerification,
        route: AllRouteConstants.settings.accountSettings,
        cardBgColor: '#FFFBF5',
        cardTextColor: '#DDA338',
    };

    const premiumPlanData = {
        buttonLabel: 'Upgrade Now',
        content: 'Get access to Premium plans when you upgrade to GreenHUrb pro.',
        header: 'Premium Plan',
        icon: MedalIcon,
        route: AllRouteConstants.settings.accountSettings,
        cardBgColor: '#FAFFF5',
        cardTextColor: '#50870E',
    };

    const transactionTableInformation = {
        tableHead: ['Date', 'Product Name', 'Order No', 'Amount', 'Status', 'Customer Name', '']
    }

    return (
        <div className='dashboard_home'>
            <div className="dashboard_home_top">
                <div className="dashboard_home_top_left">
                    <div className="dashboard_home_top_left_kpi_cards">
                        <KpiBalanceCard cardAmount={walletBalance} cardHeading='Wallet Balance' shadowColor='#053C7C' />
                        <KpiBalanceCard cardAmount={todaysBalance} cardHeading="Today's Balance" shadowColor='#F2C570' />
                    </div>
                    <div className="dashboard_home_top_left_overview_card">
                        <Overview />
                    </div>
                </div>
                <div className="dashboard_home_top_right">
                    <DashboardNotification {...accountVerificationData} />
                    <DashboardNotification {...premiumPlanData} />
                    <TopProducts />
                </div>
            </div>
            <div className="dashboard_home_bottom">
                <TransactionTable tableData={dummyTransactions} tableHead={transactionTableInformation.tableHead} />
            </div>
        </div>
    );
}

