// import Styles
import "./DashboardLayoutStyles.scss";

// import libraries
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router";

// import custom components
// import { RequireAuth } from '../../HoC/RequireAuth';
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { IPage } from "../../redux/pageInfoSlice";

// iport custom hooks
import { usePageInfoActions } from "../../hooks/useReduxActions";
import useScreenSize from "../../hooks/useScreenSize";

const DashboardLayout = () => {
  const location = useLocation();
  const { setCurrentPage } = usePageInfoActions();
  useScreenSize();

  const handleSetCurrentPath = () => {
    const currentPath = location.pathname.split("/");

    let path: string;

    if (currentPath?.length > 2) {
      // console.log(currentPath)
      path = currentPath[2].split("-").join(" ");
      setCurrentPage(path as IPage);
    } else if (currentPath && currentPath.length < 3) {
      path = currentPath[1];
      if (path) {
        setCurrentPage(path as IPage);
      } else {
        setCurrentPage("Dashboard");
      }
      // console.log(currentPath)
    }
  };

  useEffect(() => {
    handleSetCurrentPath();
  }, [location]);
  return (
    // <RequireAuth>
    <div className="dashboard_layout">
      <Sidebar />
      <div className="dashboard_content">
        <div className="dashboard_content_inner_container">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
    // </RequireAuth>
  );
};

export default DashboardLayout;
