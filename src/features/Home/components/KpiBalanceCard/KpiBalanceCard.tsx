import React, { useEffect, useState } from 'react'
import './KpiBalanceCardStyles.scss'

// Import Assets
import WalletIcon from '../../../../assets/icons/walletIcon.svg'
import VisibleIcon from '../../../../assets/icons/visible.svg'
import NotVisibleIcon from '../../../../assets/icons/not-visible.svg'


interface IKpiCardProps {
    shadowColor: string
    cardHeading: string
    cardAmount: string
}
const KpiBalanceCard = (props: IKpiCardProps) => {
    const [isAmountShown, setIsAmountShown] = useState<boolean>(false)

    const handleChangeAmountType = () => {
        setIsAmountShown(!isAmountShown)
    }


    return (
        <div className='kpi_balance_card' style={{
            boxShadow: `0px 7px 0px ${props?.shadowColor}`
        }}>
            <div className="kpi_balance_card_container">
                <div className="top">
                    <span>{props?.cardHeading}</span>
                    <div className="img_container">
                        <img src={WalletIcon} />
                    </div>
                </div>
                <div className="bottom">
                    <h2>{isAmountShown ? `N${props.cardAmount}` : '******'}</h2>
                    <div className="img_container" onClick={handleChangeAmountType}>
                        <img src={isAmountShown ? NotVisibleIcon : VisibleIcon} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default KpiBalanceCard