import "./styles.scss";

import { useEffect } from "react";
import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";

import { RequireAuth } from "@HoC";
import { IPage } from "@redux";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { useAppActions, useAppSelector, useScreenSize } from "@hooks";
import { PageLoader } from "@/components";

export const DashboardLayout = () => {
  const location = useLocation();
  const { setCurrentPage } = useAppActions();
  const { appLoading } = useAppSelector(state => state.appSlice);

  useScreenSize();

  const handleSetCurrentPath = () => {
    const currentPath = location.pathname.split("/")[1];
    if (currentPath) {
      setCurrentPage(currentPath as IPage);
    } else {
      setCurrentPage("Dashboard");
    }
  };

  useEffect(() => {
    handleSetCurrentPath();
  }, [location]);

  useEffect(() => {
    console.log(appLoading, "looading");
  }, [appLoading]);

  if (appLoading) {
    return <PageLoader />;
  }

  return (
    <RequireAuth>
      <div className="dashboard_layout">
        <Sidebar />
        <div className="dashboard_content">
          <div className="dashboard_content_inner_container">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </div>
    </RequireAuth>
  );
};
