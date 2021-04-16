import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import mainActions from "../Actions"; 

// Lib
import Helmet from "react-helmet";

// Components
import CreateEntryForm from "../presentation/CreateEntryForm";
import EntryTable from "../presentation/EntryTable";

// Services
import i18n from '../../../../i18n';

class HomePage extends Component {
  render() {
    return (
      <>
        <Helmet title={i18n.t("page-title")} />

        <CreateEntryForm />
        <EntryTable />
      </>
    );
  }
}

const mapStateToProps = state => ({
  showByCategory: state.main.showByCategory,
  entryById: state.main.entryById,
  entryIdList: state.main.entryIdList,
  isLoading: state.main.isLoading,
});

const mapDispatchToProps = dispatch => ({
  createEntryRequest: (value) => dispatch(mainActions.createEntryRequest(value)),
  getEntriesRequest: (value) => dispatch(mainActions.getEntriesRequest(value)),
  deleteEntryRequest: (value) => dispatch(mainActions.deleteEntryRequest(value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HomePage);
