import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";

interface ConditionPageProps {}

export const ConditionPage: React.FC<ConditionPageProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <div className="auth_tAndC">
      <div className="auth_tAndC_container" style={{ position: "relative" }}>
        <div className="auth_tAndC_top">
          <button
            className="auth-back-btn"
            onClick={() => navigate(-1)}
            style={{ position: "absolute", top: "5%", left: "5%" }}
          >
            <BiArrowBack />
          </button>
          <h1 style={{ fontSize: "25px" }}>Terms and Condition</h1>
        </div>
        <section className="auth_tAndC_text">
          <p>
            Lorem ipsum dolor sit amet consectetur. Praesent interdum tempus vulputate quis ac. Quis
            orci purus massa duis pharetra.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Praesent interdum tempus vulputate quis ac. Quis
            orci purus massa duis pharetra.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Praesent interdum tempus vulputate quis ac. Quis
            orci purus massa duis pharetra.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Praesent interdum tempus vulputate quis ac. Quis
            orci purus massa duis pharetra.
          </p>
        </section>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="auth_tAndC_btn">
            <Button label="Accept" variant="contained" fullWidth />
            <Button label="Decline" variant="contained" fullWidth />
          </div>
        </div>
      </div>
    </div>
  );
};

