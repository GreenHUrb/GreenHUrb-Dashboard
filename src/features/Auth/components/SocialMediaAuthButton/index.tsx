import { Spinner } from "@/components";
import "./styles.scss";
import { ISocialMediaAuthButtonProps } from "./types";

export const SocialMediaAuthButton = (props: ISocialMediaAuthButtonProps) => {
  const { image, label, className, link, loading } = props;
  return (
    <a href={link}>
      <button className={`${className} social_media_auth_button`}>
        {loading && (
          <>
            <Spinner />
          </>
        )}

        {!loading && (
          <>
            <div className="social_media_auth_image_icon">
              <img src={image} className="auth-google_icon" />
            </div>
            <span>{label}</span>
          </>
        )}
      </button>
    </a>
  );
};
