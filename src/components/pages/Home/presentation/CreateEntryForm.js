import React from "react";

// Lib
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

// Components
import CustomButton from "../../../reusable/CustomButton";
import CustomInput from "../../../reusable/CustomInput";

// Services
import i18n from '../../../../i18n';

const CreateEntryForm = ({ handleAddOnClick, handleOnChange, formInput }) => {

  return (
    <section className="create-form-section">
      <Paper>
        <h3>{ i18n.t("create_form__title") }</h3>

        <form noValidate autoComplete="off">
          <CustomInput 
            value={formInput[i18n.t("create_form__item_input_label")]}
            name={i18n.t("create_form__item_input_name")}
            label={i18n.t("create_form__item_input_label")}
            placeholder={i18n.t("create_form__item_input_placeholder")}
            handleOnChange={handleOnChange}
            hasIcon={false}
          />

          <CustomInput 
            value={""}
            name={i18n.t("create_form__category_input_name")}
            label={i18n.t("create_form__category_input_label")}
            placeholder={i18n.t("create_form__category_input_placeholder")}
            handleOnChange={handleOnChange}
            hasIcon={false}
            isSelect={true}
            selectOptions={[{label: "Fruits", value: "fruits"}]}
          />

          <CustomInput 
            value={""}
            name={i18n.t("create_form__item_input_name")}
            label={i18n.t("create_form__price_input_label")}
            placeholder={i18n.t("create_form__price_input_placeholder")}
            handleOnChange={handleOnChange}
            hasIcon={true}
            icon={'$'}
          />

          <CustomButton 
            icon={<AddIcon />}
            onClick={handleAddOnClick}
            text={i18n.t("create_form__add_button")}
          />
        </form>
      </Paper>
    </section>
  );
}

export default CreateEntryForm;
