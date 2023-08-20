import './SocialMediaAuthButtonStyles.scss'

interface ISocialMediaAuthButtonProps {
    image: string,
    label: string
}
const SocialMediaAuthButton = (props: ISocialMediaAuthButtonProps) => {
    const { image, label } = props
    return (
        <button className="social_media_auth_button">
            <div className="social_media_auth_image_icon">
                <img src={image} className="auth-google_icon" />
            </div>
            <span>{label}</span>
        </button>
    )
}

export default SocialMediaAuthButton