
import SettingsBackButton from "../components/SettingsBackButton/SettingsBackButton";
import { AllRouteConstants } from "../../../router/RouteConstants";

import Input from "../../../components/form/Input/Input";
import HelpItem from "../components/HelpItem/HelpItem";
import mobbile from "../../../assets/icons/monitor-mobbile.svg";
import money from "../../../assets/icons/money-send.svg";
import status from "../../../assets/icons/status-up.svg";
import mobbile1 from "../../../assets/icons/monitor-mobbile (1).svg";

const helpCenterList = [
  {
    title: "Getting Started",
    desc: "Get tips on navigating the dashboard, the features and functions.",
    image: mobbile
  },
  {
    title: "Running your business ",
    desc: "Learn how to run your business successfully by following these steps in this link.",
    image: money
  },
  {
    title: "Monitor your business",
    desc: "Understand how analytics work with driving business and sales",
    image: status
  },
  {
    title: "Premium plan subscription",
    desc: "Get more details on the GreenHUrb subscription",
    image: mobbile1
  },
  
];

export const HelpCenter = ({}) => {
  return (
    <main className="settings_help_center animate__animated animate__fadeIn">
      <SettingsBackButton name="Back to settings" route={AllRouteConstants.settings.index} />

      <div>
        <div>
          <h3>How may I help you</h3>
          <div>
            <Input id="name" label="" error={null} inputProps={{ type: "text" }} className='settings_help_center_input' />
          </div>
        </div>
        <div></div>
        {helpCenterList.map((list, index)=>(
            <HelpItem key={index} {...list} />

        ))}
        <div />
      </div>
    </main>
  );
};
