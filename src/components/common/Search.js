import React from "react";
import PropTypes from "prop-types";
import { Async } from "react-select";
import { withRouter } from "react-router-dom";
import { handleResponse } from "../../helpers.js";
import { API_URL } from "../../config";
import "react-select/dist/react-select.css";

class Search extends React.Component {
  constructor() {
    super();

    this.goToCurrency = this.goToCurrency.bind(this);
  }

  goToCurrency(value) {
    this.props.history.push(`/currency/${value.value}`);
  }

  fetchCurrencyNames(input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }

    return fetch(`${API_URL}/autocomplete?searchQuery=${input}`)
      .then(handleResponse)
      .then(result =>
        result.map(currency => ({
          value: currency.id,
          label: currency.name
        }))
      )
      .then(result => {
        return { options: result };
      });
  }

  render() {
    return (
      <Async
        autosize={false}
        autoFocus={true}
        onChange={this.goToCurrency}
        loadOptions={this.fetchCurrencyNames}
      />
    );
  }
}

Search.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Search);
