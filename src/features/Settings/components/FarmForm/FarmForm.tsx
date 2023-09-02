import React, { useEffect, useState } from "react";
import Input from "../../../../components/form/Input/Input";
import { useForm } from "../../../../hooks/useForm";
import { handleFormatLabelForId } from "../../../../utils/formUtils";
import { emptyValidator } from "../../../../utils/validators/emptyValidator";
import { IFarm } from "../../interfaces/IAccountSettings";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from 'react-icons/ai';
import Button from "../../../../components/Button/Button";
import './FarmForm.scss';

interface ISingleFarmFormProps {
    farm: IFarm;
    onFormSubmit: (form: IFarm) => void;
    pageMode: 'view' | 'edit' | 'add';
    handleCancel?: () => void
}

export const SingleFarmField = (props: ISingleFarmFormProps) => {
    const { farmCity, farmName, farmState } = props.farm;

    const farmForm = useForm<IFarm>(
        {
            farmCity,
            farmName,
            farmState
        },
        {
            farmCity: emptyValidator,
            farmName: emptyValidator,
            farmState: emptyValidator
        }
    );

    const { form, formErrors, onChange } = farmForm;
    const [farmActions, setFarmActions] = useState({
        update: false,
        delete: false
    });

    const handleChange = (key: keyof IFarm, value: string) => {
        onChange(key, value);
    };

    const handleUpdateForm: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        farmForm.resetFormErrors();
        const valid = farmForm.validate();
        if (valid) {
            props.onFormSubmit(form)
            setFarmActions({ ...farmActions, update: false })
        }
    }

    const handleCancelButton = () => {
        if (props.handleCancel) {
            props?.handleCancel()
        }
        setFarmActions({ ...farmActions, update: false })
    }

    useEffect(() => {
        if (props.pageMode === 'add') {
            setFarmActions({ ...farmActions, update: true })
        }
    }, [])


    return (
        <div className={`single_farm_field single_farm_field_${props.pageMode}`}>
            {props.pageMode === 'edit' && (
                <div className="single_farm_field_top_icons">
                    <MdDeleteOutline className="single_farm_field_icon" />
                    <AiOutlineEdit className="single_farm_field_icon" onClick={() => setFarmActions({ ...farmActions, update: true })} />
                </div>
            )}

            <form className="single_farm_field_form" onSubmit={handleUpdateForm}>
                <div className="input">
                    <Input
                        id={handleFormatLabelForId("Farm Name")}
                        label="Farm Name"
                        error={formErrors.farmName}
                        inputProps={{
                            placeholder: "Enter your Farm Name",
                            value: form.farmName,
                            onChange: e => handleChange("farmName", e.target.value),
                            readOnly: !farmActions.update
                        }}
                    />
                </div>

                <div className="single_farm_field_bottom_input">
                    <Input
                        id={handleFormatLabelForId("Farm City")}
                        label="Farm City"
                        error={formErrors.farmCity}
                        inputProps={{
                            placeholder: "Enter your Farm City",
                            value: form.farmCity,
                            onChange: e => handleChange("farmCity", e.target.value),
                            readOnly: !farmActions.update
                        }}
                    />
                    <Input
                        id={handleFormatLabelForId("Farm State")}
                        label="Farm State"
                        error={formErrors.farmState}
                        inputProps={{
                            placeholder: "Enter your Farm State",
                            value: form.farmState,
                            onChange: e => handleChange("farmState", e.target.value),
                            readOnly: !farmActions.update
                        }}
                    />
                </div>

                {farmActions.update && (
                    <div className="single_farm_field_update_btn_container">
                        <Button
                            variant="contained"
                            label={props.pageMode === 'add' ? 'Add Farm' : 'Update Farm'}
                        />
                        <Button
                            variant="outlined"
                            label='Cancel'
                            type="button"
                            onClick={handleCancelButton}
                        />
                    </div>
                )}
            </form>
        </div>
    );
};
