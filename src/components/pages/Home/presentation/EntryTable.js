import React from "react";

// Components
import CustomTable from "../../../reusable/CustomTable";

// Services
import i18n from '../../../../i18n';

const EntryTable = ({ tableData }) => {
  return (
    <section className="entry-table-section">
      <h3>{ i18n.t("entry_table__title") }</h3>
      
      <CustomTable 
        tableData={tableData}
      />
    </section>
  );
}

export default EntryTable;
