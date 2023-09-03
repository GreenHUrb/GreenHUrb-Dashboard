import SettingsLink from "../components/SettingsLink/SettingsLink";
import { AllRouteConstants } from "../../../router/RouteConstants";


const linkDetails = [
  {
    name: "Account settings",
    description: "User account and profile information.",
    path: AllRouteConstants.settings.accountSettings
  },
  {
    name: "Notifications settings",
    description:
      "Manage notifications, receive updates including Sales informations and custom settings ",
    path: AllRouteConstants.settings.notificationSettings
  },
  {
    name: "Payment settings",
    description: "Manage notifications, receive updates including Sales informations,  ",
    path: ""
  },
  {
    name: "Password settings",
    description: "Manage notifications, receive updates including Sales informations,  ",
    path: AllRouteConstants.settings.passwordSettings
  },
  {
    name: "FAQs",
    description: "Get immediate answers to common queries,",
    path: AllRouteConstants.settings.faq
  },
  {
    name: "Help center",
    description: "Get immediate answers to common queries,",
    path: AllRouteConstants.settings.helpCenter
  },
  {
    name: "Subscription plan",
    description: "Get immediate answers to common queries,",
    path: AllRouteConstants.settings.subscription
  },
  {
    name: "Delete account",
    description: "Permanently delete your account",
    path: ""
  }
];

export const Home = () => {
  const allSettingsLink = linkDetails.map((link, index) => <SettingsLink key={index} {...link} />);

  return (
    <>
      <main className="settings_home">{allSettingsLink}</main>
    </>
  );
};
