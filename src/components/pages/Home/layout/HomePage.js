import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import mainActions from "../Actions"; 

// Lib
import Helmet from "react-helmet";
import uuid from 'react-uuid';

// Components
import CreateEntryForm from "../presentation/CreateEntryForm";
import EntryTable from "../presentation/EntryTable";

// Services
import i18n from '../../../../i18n';

class HomePage extends Component {
  state = {
    formInput: {},
    formIsInvalid: true,
    tableCategories: [
      i18n.t("create_form__item_input_label"),
      i18n.t("create_form__category_input_label"),
      i18n.t("create_form__price_input_label"),
      i18n.t("entry_table__actions_text")
    ]
  }

  componentDidMount = () => {

    // Get the cached data
    this.handleGetEntries();
  }

  // Call to get all the entries

  handleGetEntries = (category, sortBy, sortOrder) => {
    this.props.getEntriesRequest(category, sortBy, sortOrder);
  }

  // Form Onchnge funtion

  handleOnChange = (e) => {
    const { formInput } = this.state;
    const { name, value } = e.target;

    this.setState({ 
      formInput: {
        ...formInput,
        [name]: value
      }
    }, () => {

      // For validation
      this.handleValidation();
    })
  }

  // Add entry function

  handleAddOnClick = () => {
    const { formIsInvalid, formInput } = this.state;

    // Validation Check

    if (!formIsInvalid) {
      formInput['id'] = uuid(); 
  
      this.props.createEntryRequest(formInput);

      this.setState({
        formInput: {}
      })
    }
  }

  // Add entry enter key Action

  handleOnKeyPress = (e) => {
    const { formIsInvalid, formInput } = this.state;

    // Validation Check
    if (e.key === 'Enter' && !formIsInvalid) {
      this.handleAddOnClick(formInput);
    }
  }

  // Basic form validation

  handleValidation = () => {
    const { formInput } = this.state;

    let formIsInvalid = true;

    if ((Object.keys(formInput).length === 3) && (Object.values(formInput).every(item => item) === true)) {
      formIsInvalid = false;
    } 

    this.setState({
      formIsInvalid
    })
  }

  // Each Entry actions

  handleRowActions = (actionType, id) => {
    if (actionType === "DELETE") {
      this.props.deleteEntryRequest(id)
    }
  }

  // Clear Data Action

  handleClearOnClick = () => {

    this.props.resetEntriesRequest();

    this.setState({
      formInput: {}
    })
  }

  // Filtering Action

  handleFilterAction = (e) => {
    const category = e.target.value || "all";
    
    this.handleGetEntries(category);
  }

  // Sorting Action

  requestSort = (sortCategory) => {
    const { sortBy, sortOrder, showByCategory } = this.props;
    let tempSortBy = sortBy;
    let tempOrder = sortOrder;
    
    tempOrder = tempOrder === "asc" ? "desc" : "asc";
    
    // Firsttime OnLoad Entries
    if (!sortBy) {
      tempSortBy = sortCategory;
      tempOrder = "desc";
    } else {
      // Switching categories
      if (sortCategory !== sortBy) {
        tempSortBy = sortCategory;
        tempOrder = "asc";
      }
    }


    this.handleGetEntries(showByCategory, tempSortBy, tempOrder); 
  }

  render() {
    const { formInput, tableCategories, formIsInvalid } = this.state;
    const { categories, entryList, isLoading, showByCategory, sortOrder, sortBy } = this.props;

    // Formatting categories for Form select by removing all
    const tempSelectOptions = categories.filter((item) => item !== "all");

    return (
      <>
        <Helmet title={i18n.t("page-title")} />
        
        <CreateEntryForm 
          handleAddOnClick={this.handleAddOnClick} 
          onKeyPress={this.handleOnKeyPress}
          handleOnChange={this.handleOnChange}  
          formInput={formInput} 
          selectOptions={tempSelectOptions} 
          handleClearOnClick={this.handleClearOnClick} 
          formIsInvalid={formIsInvalid}
        />
      
        <EntryTable 
          tableCategories={tableCategories}
          tableData={entryList}   
          handleRowActions={this.handleRowActions} 
          isLoading={isLoading}  
          handleOnChange={this.handleFilterAction} 
          showByCategory={showByCategory}  
          selectOptions={categories} 
          requestSort={this.requestSort}
          sortOrder={sortOrder}
          sortBy={sortBy}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.main.categories,
  showByCategory: state.main.showByCategory,
  entryList: state.main.entryList,
  isLoading: state.main.isLoading,
  sortOrder: state.main.sortOrder,
  sortBy: state.main.sortBy,
});

const mapDispatchToProps = dispatch => ({
  createEntryRequest: (value) => dispatch(mainActions.createEntryRequest(value)),
  getEntriesRequest: (category, sortBy, sortOrder) => dispatch(mainActions.getEntriesRequest(category, sortBy, sortOrder)),
  deleteEntryRequest: (value) => dispatch(mainActions.deleteEntryRequest(value)),
  resetEntriesRequest: () => dispatch(mainActions.resetEntriesRequest()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HomePage);
