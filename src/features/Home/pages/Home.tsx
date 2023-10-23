import React from "react";
import "../styles/DashboardHomeStyles.scss";
import KpiBalanceCard from "../components/KpiBalanceCard/KpiBalanceCard";
import Overview from "../components/Overview/Overview";
import DashboardNotification from "../components/DashboardNotification/DashboardNotification";
import MedalIcon from "../../../assets/icons/MedalIcon.svg";
import AccVerification from "../../../assets/icons/AccountVerificationIcon.svg";
import { AllRouteConstants } from "../../../router/RouteConstants";
import TopProducts from "../components/TopProducts/TopProducts";
import { dummyTransactions, transactionTableHead } from "../data/dummyTransactions";
import { Pagination } from "swiper/modules";
import ShoppingCart from '../../../assets/icons/shopping cart.svg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "../../../components/Button";
import TransactionTable from "../../Transactions/components/Tables/TransactionTable";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const walletBalance = "0.00";
  const todaysBalance = "0.00";

  const accountVerificationData = {
    buttonLabel: "Go to Settings",
    content: "Your account is not fully set up. Go to settings to complete set up",
    header: "Account Verification",
    icon: AccVerification,
    route: AllRouteConstants.settings.accountSettings,
    cardBgColor: "#FFFBF5",
    cardTextColor: "#DDA338"
  };

  const premiumPlanData = {
    buttonLabel: "Upgrade Now",
    content: "Get access to Premium plans when you upgrade to GreenHUrb pro.",
    header: "Premium Plan",
    icon: MedalIcon,
    route: AllRouteConstants.settings.accountSettings,
    cardBgColor: "#FAFFF5",
    cardTextColor: "#50870E"
  };

  const dashboardRightItems = [
    <DashboardNotification {...accountVerificationData} />,
    <DashboardNotification {...premiumPlanData} />,
    <TopProducts />
  ];

  return (
    <div className="dashboard_home animate__animated animate__fadeIn">
      <div className="dashboard_home_top">
        <div className="dashboard_home_top_left">
          <div className="dashboard_home_top_left_kpi_cards">
            <KpiBalanceCard
              cardAmount={walletBalance}
              cardHeading="Wallet Balance"
              shadowColor="#053C7C"
            />
            <KpiBalanceCard
              cardAmount={todaysBalance}
              cardHeading="Today's Balance"
              shadowColor="#F2C570"
            />
          </div>
          <div className="dashboard_home_top_left_overview_card">
            <Overview />
          </div>
        </div>
        <div className="dashboard_home_top_right_desktop">
          {dashboardRightItems.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className="dashboard_home_top_right_mobile">
          <Swiper
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            scrollbar={{ draggable: true }}
          >
            {dashboardRightItems.map((item, index) => (
              <SwiperSlide key={index}>{item}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="dashboard_home_bottom">
        <div className="dashboard_home_bottom_table_card">
          <div className="dashboard_home_bottom_table_card_header">
            <h2>Recent Transactions</h2>
            <Button
              variant="text"
              label="View All"
              customClassName="view_all_button"
              onClick={() => navigate(AllRouteConstants.transactions.index)}
            />
          </div>
          <TransactionTable
            dataLimit={5}
            tableData={[]}
            tableHead={transactionTableHead}
          >
            {/* Table Empty State */}
            <div className="product_home_table_empty_state">
              <div className="product_home_table_empty_state_container">
                <div className="product_home_table_empty_state_img_container">
                  <img src={ShoppingCart} alt="cart" />
                </div>
                <p className="product_home_table_empty_state_content">
                  You have no Transactions Yet
                </p>
              </div>
            </div>
          </TransactionTable>
        </div>
      </div>
    </div>
  );
};
