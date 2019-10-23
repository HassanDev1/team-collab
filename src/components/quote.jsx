import React, { Component } from "react";
import "./style/Quote.css";
import Location from "./Location";
class Quote extends Component {
  state = {
    error: null,
    isLoaded: false,
    contents: []
  };
  abortController = new AbortController();
  componentDidMount() {
    fetch("http://quotes.rest/qod.json?category=inspire", {
      signal: this.abortController.signal
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            contents: result.contents
          });
        },

        error => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      );
  }
  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    const { error, isLoaded, contents } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="quote-container">
          <p>You are in </p>
          <Location />
          <h2>Quote of the day</h2>
          <p>
            "{contents.quotes[0].quote}" - {contents.quotes[0].author}{" "}
          </p>
        </div>
      );
    }
  }
}

export default Quote;
