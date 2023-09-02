import React, { CSSProperties, useState } from 'react'
import './DashboardNotification.scss'
import { useNavigate } from 'react-router-dom'

interface IDashboardNotification {
    header: string
    icon: string
    content: string
    cardBgColor: string
    cardTextColor: string
    buttonLabel: string
    route: string
}
const DashboardNotification = (props: IDashboardNotification) => {
    const { header, icon, cardBgColor, cardTextColor, content, buttonLabel, route } = props
    const navigate = useNavigate()

    const [styles, setStyles] = useState<CSSProperties | null>({
        background: cardTextColor
    })

    const getStyles = (state?: 'hover') => {
        switch (state) {
            case 'hover':
                setStyles({
                    background: 'white',
                    border: `1px solid ${cardTextColor}`,
                    color: cardTextColor
                })
                break
            default:
                setStyles({
                    background: cardTextColor
                })
                break
        }
    }

    return (
        <div className='dashboard_notification' style={{ background: cardBgColor, color: cardTextColor }}>
            <div className="dashboard_notification_container">
                <div className="dashboard_notification_header">
                    <div className="dashboard_notification_header_icon">
                        <img src={icon} alt='icon' />
                    </div>
                    <h2>{header}</h2>
                </div>
                <div className="dashboard_notification_content">
                    {content}
                </div>
                <button
                    onMouseOver={() => getStyles('hover')}
                    onMouseOut={() => getStyles()}
                    style={styles!}
                    className='dashboard_notification_button'
                    onClick={() => navigate(route)}
                >
                    {buttonLabel}
                </button>
            </div>
        </div>
    )
}

export default DashboardNotification