import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";



import play from "../../../../assets/icons/play.svg";
import {Button} from "../../../../components/Button";
import './HelpCenter.scss'

interface HelpItemProps {
  title: string;
  desc: string;
  image: string;
}

const HelpItem: React.FC<HelpItemProps> = ({ title, desc, image }) => {
  return (
    <div className="help_center">
      <div>
        <LazyLoadImage src={image} />
      </div>
      <div className="help_center_inner_container">
        <h3>{title}</h3>
        <p>{desc}</p>
        <Button customClassName="help_center_btn" label={<><LazyLoadImage src={play} /> watch video</>} variant='outlined' type="button" fullWidth={false} />
      </div>
    </div>
  );
};

export default HelpItem;
