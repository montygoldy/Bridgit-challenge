import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import mainActions from "../Actions"; 

// Lib
import Helmet from "react-helmet";
import uuid from 'react-uuid'

// Components
import CreateEntryForm from "../presentation/CreateEntryForm";
import EntryTable from "../presentation/EntryTable";

// Services
import i18n from '../../../../i18n';

class HomePage extends Component {
  state = {
    formInput: {}
  }

  handleOnChange = (e) => {
    const { formInput } = this.state;
    const { name, value } = e.target;
    
    this.setState({ 
      formInput: {
        ...formInput,
        [name]: value
      }
    })
  }

  handleAddOnClick = () => {
    const { formInput } = this.state;

    formInput['id'] = uuid(); 

    this.props.createEntryRequest(formInput);
  }

  // handleOnKeyPress = (e) => {
  //   const { formInput } = this.state;
  //   // Add a check to make sure form is not empty
  //   if (e.key === 'Enter' && formInput) {
  //     this.handleAddOnClick();
  //   }
  // }

  render() {
    const { formInput } = this.state;

    return (
      <>
        <Helmet title={i18n.t("page-title")} />

        <CreateEntryForm 
          handleAddOnClick={this.handleAddOnClick} 
          handleOnChange={this.handleOnChange}  
          formInput={formInput}   
        />

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
