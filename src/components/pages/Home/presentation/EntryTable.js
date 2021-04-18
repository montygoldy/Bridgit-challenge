import React from "react";

// Lib
import CircularProgress from '@material-ui/core/CircularProgress';

// Components
import CustomTable from "../../../reusable/CustomTable";
import CustomSelect from "../../../reusable/CustomSelect";

// Services
import i18n from '../../../../i18n';

const EntryTable = ({ tableCategories, tableData, handleRowActions, isLoading, handleOnChange, showByCategory, selectOptions, requestSort, sortOrder, sortBy }) => {
  
  return (
    <section className="entry-table-section">
      <div className="header-section">
        <h3>{ i18n.t("entry_table__title") }</h3>

        {
          window.config.allow_filtering
          &&
          <CustomSelect 
            value={showByCategory}
            name={i18n.t("create_form__category_input_name")}
            handleOnChange={handleOnChange}
            selectOptions={selectOptions}
            displayEmpty={false}
          />
        }
        
      </div>
      
      {
        isLoading
        ?
        <CircularProgress />
        :
        <CustomTable 
          tableCategories={tableCategories}
          tableData={tableData}
          handleRowActions={(actionType, id) => handleRowActions(actionType, id)}
          sorting_blacklist={window.config.sorting_blacklist}
          requestSort={(category) => requestSort(category)}
          sortOrder={sortOrder}
          sortBy={sortBy}
          rowActions={window.config.table_row_action}
        />
      }
    </section>
  );
}

export default EntryTable;
