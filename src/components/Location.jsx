import React, { Component } from "react";
const api_key = "07b0f171322dd9f1dd16e17644dd2945";
class Location extends Component {
  state = {
    city: [],
    code: []
  };
  componentDidMount = async () => {
    const response = await fetch(
      `http://api.ipstack.com/check?access_key=${api_key}`
    );
    const data = await response.json();
    this.setState({
      city: data.city,
      code: data.region_code
    });
  };

  render() {
    const { city, code } = this.state;
    return (
      <p>
        {city}, {code}
      </p>
    );
  }
}

export default Location;
