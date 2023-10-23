import "./styles.scss";
import { Outlet, useLocation } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";

// import Assets
import SignUpImage from "@images/SignUp-Image.png";
import LoginImage from "@images/Login-Image.png";
import { AllRouteConstants } from "@router";
import { RequireAuth } from "@/HoC";

export const AuthLayout = () => {
  const { pathname } = useLocation();
  const notUseLayoutRoutes = Object.values(AllRouteConstants.auth.notUseLayout);

  return (
    <RequireAuth noAuth>
      <div className="auth_layout">
        {!notUseLayoutRoutes.includes(pathname) && <AuthLeft />}

        <div className="outlet_container">
          <Outlet />
        </div>
      </div>
    </RequireAuth>
  );
};

const AuthLeft = () => {
  const { pathname } = useLocation();

  const getAuthLayoutImage = () => {
    if (pathname === AllRouteConstants.auth.signup) {
      return {
        image: SignUpImage,
        text: "Manage and sell your produce easily with a personalized dashboard"
      };
    } else {
      return { image: LoginImage, text: "Access your dashboard by inputting your login details" };
    }
  };
  return (
    <div className="auth_layout_left_container">
      <div className="auth_layout_left_inner_container">
        <div className="auth_layout_left_container_image">
          <LazyLoadImage src={getAuthLayoutImage().image} alt="Authentication" />
        </div>
        <p className="auth_layout_left_container_text">{getAuthLayoutImage().text}</p>
      </div>
    </div>
  );
};
