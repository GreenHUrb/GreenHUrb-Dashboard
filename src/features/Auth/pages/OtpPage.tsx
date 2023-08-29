import { current } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

import Button from "../../../components/Button/Button";
import "../styles/auth_styles.scss";
import { useNavigate } from "react-router-dom";

interface OtpPageProps {}

const OtpPage: React.FC<OtpPageProps> = ({}) => {
  const navigate = useNavigate();
  const [time, setTime] = useState<number>(59);

  useEffect(() => {
    const id = setInterval(() => {
      if (time === 0) {
        setTime(59);
      } else [setTime(currentTime => currentTime - 1)];
    }, 1000);

    return () => clearInterval(id);
  }, [time]);

  return (
    <div className="auth_otp">
      <div className="auth_otp_container" style={{ position: "relative" }}>
        <div className="auth_otp_top">
          <button
            className="auth-back-btn"
            onClick={() => navigate(-1)}
            style={{ position: "absolute", top: "5%", left: "5%" }}
          >
            <BiArrowBack />
          </button>
          <h1>OTP</h1>
          <p>Input the 4 digit code sent to your phone number 090xxxxxx90</p>
        </div>

        <form>
          <div className="auth_otp_container_input">
            <input type="text" maxLength={1} className="auth_otp_input" />
            <input type="text" maxLength={1} className="auth_otp_input" />
            <input type="text" maxLength={1} className="auth_otp_input" />
            <input type="text" maxLength={1} className="auth_otp_input" />
          </div>
          <p>Resend code in 00 : {time < 10 ? "0" + time : time}</p>
          <Button label="Verify" variant="contained" fullWidth />
        </form>
        <div>
          <p className="auth_otp_bottom_text">
            I dont have access to the phone number, send code to my{" "}
            <Button label="Email address" variant="text" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
