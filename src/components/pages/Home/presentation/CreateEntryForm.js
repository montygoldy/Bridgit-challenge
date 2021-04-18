import React from "react";

// Lib
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

// Components
import CustomButton from "../../../reusable/CustomButton";
import CustomInput from "../../../reusable/CustomInput";
import CustomSelect from "../../../reusable/CustomSelect";

// Services
import i18n from '../../../../i18n';

const CreateEntryForm = ({ handleAddOnClick, onKeyPress, handleOnChange, formInput, selectOptions, handleClearOnClick, formIsInvalid }) => {

  return (
    <section className="create-form-section">
      <div className="header-section">
        <h3>{ i18n.t("create_form__title") }</h3>

        {
          window.config.allow_clearing
          &&
          <CustomButton 
            hasIcon={false}
            onClick={handleClearOnClick}
            text={i18n.t("clear__text")}
          />
        }
      </div>

      <Paper className="form-box">
        <form noValidate autoComplete="off">
          <div className="input-section">
            <CustomInput 
              value={formInput[`${i18n.t("create_form__item_input_name")}`]}
              name={i18n.t("create_form__item_input_name")}
              label={i18n.t("create_form__item_input_label")}
              placeholder={i18n.t("create_form__item_input_placeholder")}
              handleOnChange={handleOnChange}
              hasIcon={false}
              required={true}
              isNumberFormat={false}
            />

            <CustomSelect 
              value={formInput[i18n.t("create_form__category_input_name")]}
              name={i18n.t("create_form__category_input_name")}
              label={i18n.t("create_form__category_input_label")}
              placeholder={i18n.t("create_form__category_input_placeholder")}
              handleOnChange={handleOnChange}
              selectOptions={selectOptions}
              displayEmpty={true}
            />

            <CustomInput 
              value={formInput[`${i18n.t("create_form__price_input_name")}`]}
              name={i18n.t("create_form__price_input_name")}
              label={i18n.t("create_form__price_input_label")}
              placeholder={i18n.t("create_form__price_input_placeholder")}
              handleOnChange={handleOnChange}
              hasIcon={true}
              icon={'$'}
              required={true}
              isNumberFormat={true}
            />
          </div>

          <CustomButton 
            hasIcon={true}
            icon={<AddIcon />}
            onClick={handleAddOnClick}
            onKeyPress={onKeyPress}
            text={i18n.t("create_form__add_button")}
            disabled={formIsInvalid}
          />
        </form>
      </Paper>
    </section>
  );
}

export default CreateEntryForm;
