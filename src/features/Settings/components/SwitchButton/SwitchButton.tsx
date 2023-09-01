import { useState } from 'react';
import './SwitchButton.scss'

interface ISwitchButton {
  className?: string;
  checked: boolean;
  onClick: ()=>any;
}

const SwitchButton = ({ className, checked, onClick }: ISwitchButton) => {

  return (
    <button onClick={onClick} className={`${className} switch_button ${checked ? 'right' : null}`}>
      <span className={`switch_button_circle ${checked ? 'right' : null}`}></span>
    </button>
  );
};

export default SwitchButton;
