import { RequireAuth } from "../../HoC/RequireAuth";
import PopModal from "../ModalLayout/ModalLayout";
import "./AuthWrapperStyle.scss";
import { Outlet, useLocation, useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";


// import Assets
import SignUpImage from "../../assets/images/SignUp-Image.png";
import LoginImage from "../../assets/images/Login-Image.png";
import { AllRouteConstants } from "../../router/RouteConstants";

const AuthLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();


  const getAuthLayoutImage = () => {
    if (pathname === AllRouteConstants.auth.signup) {
      return { image: SignUpImage, text: 'Manage and sell your produce easily with a personalized dashboard' };
    } else {
      return { image: LoginImage, text: 'Access your dashboard by inputting your login details' };
    }
  };

  return (
    <div className="auth_layout">

      <div className="auth_layout_left_container">
        <div className="auth_layout_left_inner_container">
          <div className="auth_layout_left_container_image">
            <LazyLoadImage src={getAuthLayoutImage().image}
              alt='Authentication'
            />
          </div>

        </div>

        <p className="auth_layout_left_container_text">
          {getAuthLayoutImage().text}
        </p>
      </div>
      <div className="outlet_container">
        <Outlet />
      </div>
    </div>
  )
};

export default AuthLayout;
