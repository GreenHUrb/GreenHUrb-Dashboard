import { RequireAuth } from "../../HoC/RequireAuth";
import PopModal from "../ModalLayout/ModalLayout";
import "./AuthWrapperStyle.scss";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="auth_layout_container">
      <Outlet />
    </div>
  )
};

export default AuthLayout;
