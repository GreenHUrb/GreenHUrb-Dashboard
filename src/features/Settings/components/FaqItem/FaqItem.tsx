import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { HiMiniMinusSmall } from "react-icons/hi2";

import "./FaqItem.scss";

interface FaqItemProps {
  list: {
    title: string;
    details: string;
  };
}

const FaqItem: React.FC<FaqItemProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="faq_item">
      <div>
        <h3>{list.title}</h3>
        <button onClick={handleChange}>
          {isOpen ? (
            <HiMiniMinusSmall style={{ fontSize: "16px" }} />
          ) : (
            <IoIosAdd style={{ fontSize: "16px" }} />
          )}
        </button>
      </div>
      <p className={`${isOpen ? "open" : null}`}>{list.details}</p>
    </div>
  );
};

export default FaqItem;
