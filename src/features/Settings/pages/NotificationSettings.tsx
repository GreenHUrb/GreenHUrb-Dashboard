import SettingsBackButton from "../components/SettingsBackButton";
import { AllRouteConstants } from "../../../router/RouteConstants";
import NotificationItem from "../components/NotificationItem/NotificationItem";

interface NotificationSettingsProps {}

const notificationSettingsList = {
  EmailNotification: [
    {
      title: "Product News and offer",
      desc: 'Stay Ahead with Exclusive Product News and Irresistible Offers!"'
    },
    {
      title: "Order status updates",
      desc: "Receive notifications about the current status of an order placed."
    },
    {
      title: "Account security notifications",
      desc: "inform you about the security status and activities related to your online account."
    },
    {
      title: "Dashboard Summary",
      desc: "Receive a summary of updates that occurred within a given week"
    }
  ],
  pushNotifications: [
    {
      title: "New Orders",
      desc: "Receive notifications special offers, discounts, promotions, or opportunities."
    },
    {
      title: "Exclusive deals",
      desc: 'Stay Ahead with Exclusive Product News and Irresistible Offers!"'
    }
  ],
  notificationSound: [
    {
      title: "New Orders",
      desc: "Vib"
    }
  ]
};

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({}) => {
  return (
    <main className="settings_notification animate__animated animate__fadeIn">
      <SettingsBackButton name="Back to settings" route={AllRouteConstants.settings.index} />
      <div>
        <div className="settings_notification_section">
          <div>
            <h3>Email notification</h3>
            <p className="settings_notification_title">
              Receive important updates and alerts via email. Choose from the following options
            </p>
          </div>
          <div>
            {notificationSettingsList.EmailNotification.map(list => (
              <NotificationItem list={list} />
            ))}
          </div>
        </div>

        <div className="settings_notification_section">
          <div>
            <h3>Push Notifications</h3>
            <p className="settings_notification_title">
              Get instant updates on your device. Select your preferred push notification options
            </p>
          </div>
          <div>
            {notificationSettingsList.pushNotifications.map(list => (
              <NotificationItem list={list} />
            ))}
          </div>
        </div>

        <div className="settings_notification_section">
          <div>
            <h3>Notification Sound</h3>
            <p className="settings_notification_title">Be notified when you get an order</p>
          </div>
          <div>
            {notificationSettingsList.notificationSound.map(list => (
              <NotificationItem list={list} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

