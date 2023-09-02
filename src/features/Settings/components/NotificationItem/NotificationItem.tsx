import React, { useState } from "react";

import "./NotificationItem.scss";
import SwitchButton from "../SwitchButton/SwitchButton";

interface NotificationItemProps {
  list: {
    title: string;
    desc: string;
  };
}

const NotificationItem: React.FC<NotificationItemProps> = ({ list }) => {
  const [checked, setChecked] = useState<boolean>(false)



  const handleChange = () => {
    setChecked(prevState => !prevState)
  };

  return (
    <div className="notification_item">
      <div>
        <h4>{list.title}</h4>
        {/* <IOSSwitch checked={checked} onChange={handleChange} /> */}
        <SwitchButton onClick={handleChange} checked={checked} />
      </div>
      <p>{list.desc}</p>
    </div>
  );
};

export default NotificationItem;
