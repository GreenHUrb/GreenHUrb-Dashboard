import React from 'react'
import { useForm } from '../../../hooks/useForm'
import { emptyValidator } from '../../../utils/validators/emptyValidator'

export interface IChangePassword {
    oldPassword: string
    newPassword: string
    confirmPassword: string
}
const useChangePassword = () => {
    const changePasswordForm = useForm<IChangePassword>(
        { confirmPassword: '', newPassword: '', oldPassword: '' },
        { confirmPassword: emptyValidator, newPassword: emptyValidator, oldPassword: emptyValidator }
    )

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        changePasswordForm.resetFormErrors();
        const valid = changePasswordForm.validate();
        if (valid) {

            console.log(changePasswordForm.form)
        }

    };

    return {
        changePasswordForm,
        handleSubmit
    }



}

export default useChangePassword