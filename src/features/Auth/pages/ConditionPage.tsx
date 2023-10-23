import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { Button } from "@components";
import '../styles/auth_styles.scss'
import { AllRouteConstants } from "@/router";


export const ConditionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth_tAndC">
      <div className="auth_tAndC_container">
        <div className="auth_tAndC_top">
          <h1 className="auth_tAndC_head">Terms and Condition</h1>
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="auth_tAndC_btn">
            <Button label="Accept" onClick={() => navigate(AllRouteConstants.auth.login)} variant="contained" fullWidth />
          </div>
        </div>
      </div>
    </div>
  );
};

