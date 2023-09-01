import SettingsBackButton from "../components/SettingsBackButton";
import { AllRouteConstants } from "../../../router/RouteConstants";
import NotificationItem from "../components/NotificationItem/NotificationItem";
import { notificationSettingsList } from "../data/notificationSettingsList";

export const NotificationSettings = () => {
  return (
    <main className="settings_notification animate__animated animate__fadeIn">
      <SettingsBackButton name="Back to settings" route={AllRouteConstants.settings.index} />
      <div>
        {notificationSettingsList.map((item, index) => (
          <div key={index} className="settings_notification_section">
            <div>
              <h3>{item.title}</h3>
              <p className="settings_notification_title">{item.desc}</p>
            </div>
            <div>
              {item.notificationList.map((list, index) => (
                <NotificationItem list={list} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};


