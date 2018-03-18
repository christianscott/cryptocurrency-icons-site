import React from "react";
import SearchBox from "./SearchBox";
import SearchableIcons from "./SearchableIcons";
import icons from "./iconSvgs.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: "" };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    this.setState({ query });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBox handleSearch={this.handleSearch} />
        <SearchableIcons query={this.state.query} icons={icons} />
      </React.Fragment>
    );
  }
}
