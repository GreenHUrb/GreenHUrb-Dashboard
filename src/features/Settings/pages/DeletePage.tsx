import "../styles/deletePage.scss";
import Warning from "../../../assets/icons/Group.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Input from "../../../components/form/Input/Input";
import Checkbox from "../../../components/form/Checkbox/Checkbox";
import Button from "../../../components/Button/Button";
import BackButton from "../../../components/BackButton/SettingsBackButton";
import { AllRouteConstants } from "../../../router/RouteConstants";

interface IBackDrop {
  children: React.ReactNode;
}

const BackDrop = ({ children }: IBackDrop) => {
  return <div className="delete_modal animate__animated animate__fadeIn">{children}</div>;
};

const Modal = ({ children }: IBackDrop) => {
  return (
    <BackDrop>
      <div className="delete_backdrop">{children}</div>
    </BackDrop>
  );
};

export const DeletePage = () => {
  return (
    <Modal>
      <main className="delete_settings animate__animated animate__fadeIn">
        <div style={{display: 'flex', gap: '.5rem'}}>
        <BackButton locationName="Back to Settings" locationRoute={AllRouteConstants.settings.index} />
          <h3>Delete your GreenHUrb account</h3>
        </div>
        <div className="delete_settings_warning">
            <LazyLoadImage src={Warning} />
            <p>You are about to delete your account, Once you delete it, it takes 20 days for it to reflect. You may read more about it <Link to={""}>here</Link>.</p>
        </div>
        <p className="delete_settings_warning_text">You don’t need to go, but if you are certain, you need to put your password in the field below to confirm its you deleting your account.</p>
        <Input label="Password" id="password" error={null} inputProps={{type: 'password'}} />
      <Checkbox label="Lorem ipsum dolor sit amet consectetur. Vestibulum at sit arcu  non donec nisi augue pro."  inputClassName='delete_settings_input' />
      <div style={{marginLeft: 'auto', width: 'max-content'}}>
        <Button variant='text' label="Cancel" />
        <Button variant="contained" label="Delete account" buttonProps={{style: {backgroundColor: '#870E14', border: '#870E14', marginLeft: '.5rem'}}} />
      </div>
      </main>
    </Modal>
  );
};
