import React from "react";
import debouce from "lodash/debounce";

export default class SearchBox extends React.Component {
  static defaultProps = {
    debounceTime: 100,
    placeholder: "Search"
  };

  constructor(props) {
    super(props);

    this.state = { query: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const query = ev.target.value;
    this.setState({ query });
    this.handleSearch(query);
  }

  handleSearch = debouce(this.props.handleSearch, this.props.debounceTime);

  render() {
    const placeholder = this.props.placeholder;
    return (
      <input
        value={this.state.query}
        onChange={this.handleChange}
        placeholder={placeholder}
      />
    );
  }
}
