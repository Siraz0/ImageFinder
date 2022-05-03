import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], foundTerm: "" };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results, foundTerm: term });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList
          images={this.state.images}
          imageName={this.state.foundTerm}
        />
      </div>
    );
  }
}

export default App;

// API KEY: UWPoN74BPo4I6QfcTYjQ4w61bJMBDeC3FLwJlcvwTi4
// SECRET KEY: 1ZIMrR6WbD9hN3_BvA-wIkHD4vM1DZfT56afVj-ntTo
