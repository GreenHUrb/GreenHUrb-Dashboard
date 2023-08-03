import React from 'react'
import PopModal from '../../layouts/ModalLayout/ModalLayout'
import './ModalsStyles.scss'
import { IErrorModal } from './ModalInterfaces'

const ErrorModal = (props: IErrorModal) => {
    const { button, heading, message } = props
    return (
        <PopModal fullOverlay onClose={() => console.log('hey')}>
            <div className="error_modal_content">
                <img
                    src="https://100dayscss.com/codepen/alert.png"
                    width={44}
                    height={38}
                />
                <span className="title">{heading}</span>
                <p>{message}</p>
                <div className="button">{button}</div>
            </div>
        </PopModal>
    )
}

export default ErrorModal