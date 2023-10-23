import "./styles.scss";
import { PopModal } from "@layouts";
import LogoutIcoon from "@icons/modalLogoutIcon.svg";
import { useApi, useAppActions, useAppSelector, useAuthActions } from "@/hooks";
import { Button, ModalHeader, ModalParagraph } from "@/components";
import { Services } from "@/services";
import { useNavigate } from "react-router-dom";
import { AllRouteConstants } from "@/router";
import { makeToast } from "@/libs";

export const Logout = (props: { onClose: () => void }) => {
  const navigate = useNavigate();
  const { logout } = useAuthActions();
  const { toggleAppLoader } = useAppActions();
  const { appLoading } = useAppSelector(state => state.appSlice);

  const logoutApiRequest = useApi<any, any>(() => Services.Auth.logout());

  const { onClose } = props;

  const handleLogout = async () => {
    try {
      toggleAppLoader(true);

      await logoutApiRequest.request();

      logout();

      navigate(AllRouteConstants.auth.login);

      return makeToast({ message: "Logged Out Successfully", type: "success", id: "logout" });
    } catch (error: any) {
      makeToast({ message: error?.message, type: "error", id: "logout" });
    } finally {
      toggleAppLoader(false);
    }
  };

  return (
    <PopModal fullOverlay onClose={onClose}>
      <div className="logout_modal">
        <div className="logout_modal_container">
          <div className="logout_modal_heading_image">
            <img src={LogoutIcoon} alt="delete_icon" />
          </div>

          <div className="logout_modal_content">
            <ModalHeader heading="Log Out" />

            <ModalParagraph message="You are about to logout, do you wish to procede?" />
          </div>

          <div className="logout_modal_btn_group">
            <Button label="Cancel" fullWidth variant="outlined" onClick={onClose} />
            <Button
              label="Logout"
              variant="contained"
              loading={appLoading}
              onClick={handleLogout}
              fullWidth
              customClassName="logout_modal_btn"
            />
          </div>
        </div>
      </div>
    </PopModal>
  );
};
