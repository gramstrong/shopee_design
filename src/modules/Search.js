import React, { PureComponent } from "react";
import dynamicSort from "../helpers/dynamic-sort";
import AutoFill from "./AutoFill";
import DisplayTable from "./DisplayTable";

class Search extends PureComponent {
  state = {
    query: "",
    filteredData: [],
    selected: -1
  };

  doSearch = ({ target: { value } }) => {
    if (value) {
      let queryResult = this.props.data.filter(comp => {
        const find = comp.name.toLowerCase().indexOf(value.toLowerCase());

        if (find !== -1) {
          comp.match = find;
        }

        return find !== -1;
      });

      queryResult.sort(dynamicSort("match"));

      this.setState({
        query: value,
        filteredData: queryResult,
        selected: queryResult.length > 0 ? 0 : -1
      });
    } else {
      this.setState({
        query: "",
        filteredData: [],
        selected: -1
      });
    }
  };

  onPressed = e => {
    if (e.keyCode === 38 && this.state.selected > 0) {
      this.setState({ selected: this.state.selected - 1 });
    } else if (
      e.keyCode === 40 &&
      this.state.selected > -1 &&
      this.state.selected < this.state.filteredData.length - 1
    ) {
      this.setState({ selected: this.state.selected + 1 });
    }
  };

  render() {
    const { filteredData, query, selected } = this.state;

    return (
      <div>
        <input
          placeholder="eg. logo, banner, mascot..."
          onChange={this.doSearch}
          onKeyDown={this.onPressed}
        />
        <button className="search-submit">
          <img alt="search button" src="/static/image/search.svg" />
        </button>
        <AutoFill data={filteredData} query={query} selected={selected} />
        <DisplayTable data={filteredData} query={query} selected={selected} />
      </div>
    );
  }
}

export default Search;
