import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { IAccountProfile, IFarm } from '../interfaces/IAccountSettings';

const useAccountSettings = () => {
    const [accountSettingsMode, setAccountSettingsMode] = useState<"edit" | "view">('view');
    const { pathname } = useLocation()
    useEffect(() => {
        const allPaths = pathname.split("/");
        if (allPaths.includes("edit")) {
            setAccountSettingsMode("edit");
        } else {
            setAccountSettingsMode("view");
        }
    }, [pathname]);

    // Initialize form for account profile
    const accountProfileForm = useForm<IAccountProfile>(
        {
            emailAddress: "david@gmail.com",
            farms: [
                
            ],
            fullName: "Okunoye David",
            phoneNumber: "08088092667"
        },
        {}
    );

    const handleAccountProfileFormChange = (key: keyof IAccountProfile, value: string | IFarm[]) => {
        return accountProfileForm.onChange(key, value)
    };

    const [addFarm, setAddFarm] = useState({
        status: false,
        farm: {
            farmName: '',
            farmCity: '',
            farmState: ''
        }
    })

    const handleUpdateFarm = (farm: IFarm, index: number) => {
        const allFarms = accountProfileForm.form.farms
        allFarms[index] = farm
        handleAccountProfileFormChange('farms', allFarms)
    }
    const handleAddFarm = (farm: IFarm,) => {
        const allFarms = accountProfileForm.form.farms
        handleAccountProfileFormChange('farms', [...allFarms, farm])
        setAddFarm({ ...addFarm, status: false })
    }
    const handleOpenAddFarmForm = () => {
        setAddFarm({ ...addFarm, status: true })
    }
    const handleCloseAddFarmForm = () => {
        setAddFarm({ ...addFarm, status: false })
    }

    const handleChangeAccountSettingsMode = (state: 'view' | 'edit') => {
        setAccountSettingsMode(state)
        if (state === 'view') {
            accountProfileForm.reset()
        }
    }




    return {
        accountSettingsMode,
        handleChangeAccountSettingsMode,
        accountProfileForm: accountProfileForm.form,
        accountProfileFormErrors: accountProfileForm.formErrors,
        handleAccountProfileFormChange,
        handleUpdateFarm,
        handleAddFarm,
        addFarm,
        handleOpenAddFarmForm,
        handleCloseAddFarmForm

    }


}

export default useAccountSettings