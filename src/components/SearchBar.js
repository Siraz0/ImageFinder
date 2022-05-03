import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <label>Search Bar:</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
