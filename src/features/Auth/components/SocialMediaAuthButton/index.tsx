import './styles.scss'
import { ISocialMediaAuthButtonProps } from './types'


export const SocialMediaAuthButton = (props: ISocialMediaAuthButtonProps) => {
    const { image, label, className } = props
    return (
        <button className={`${className} social_media_auth_button`}>
            <div className="social_media_auth_image_icon">
                <img src={image} className="auth-google_icon" />
            </div>
            <span>{label}</span>
        </button>
    )
}

