import { Link } from "react-router-dom";
import { AllRouteConstants } from "../../../../router/RouteConstants";
import "../../styles/subscription_settings.scss";
import BackButton from "../../../../components/BackButton/SettingsBackButton";

export const Subscription = () => {
  return (
    <main className="settings_subscription animate__animated animate__fadeIn">
      <BackButton locationName="Back to Settings" locationRoute={AllRouteConstants.settings.index} />
      <div>
        <div className="settings_subscription_top">
          <h3>GreenHUrb pro</h3>
          <p>Recommended</p>
        </div>
        <div className="settings_subscription_main">
          <div className="settings_subscription_main_top">
            <s>N4,999/month</s>
            <h2>
              N50,000/<span>year</span>
            </h2>
          </div>

          <div className="settings_subscription_main_middle">
            <h3>Features</h3>

            <p>Educational Workshops</p>
            <p>Digital Marketing Campaigns</p>
            <p>Collaboration with Food Influencers</p>
            <p>Manage up to 2 farms in one dashboard</p>
            <p>Access to improved seeds and investment opportunities</p>
          </div>
          <Link to={AllRouteConstants.settings.subscriptionPayment}>Subscribe</Link>
        </div>
      </div>
    </main>
  );
};
