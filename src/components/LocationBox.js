import React, { Component } from "react";

class LocationBox extends Component {
  state = {
    lat: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
    //   return <div>Error: {this.state.errorMessage}</div>;
    return (
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i className="map marker alternate icon"></i>
            Please give us access to your Geo-location
          </div>
          <div className="inline">
            <a className="ui primary button" href="intent://scan/#Intent;scheme=settings;package=com.android.settings.location;end;">Android</a>
            <button className="ui primary button">Iphone</button>
          </div>
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i className="thumbs up icon"></i>
            Your location is set, lattitude: {this.state.lat}
          </div>
        </div>
      );
    }

    return (
      <div className="ui placeholder segment">
        <div className="ui icon header">
          <i className="map marker alternate icon"></i>
          Please give us access to your Geo-location
        </div>
        <div className="inline">
          <button className="ui primary button">Android</button>
          <button className="ui primary button">Iphone</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="ui sizer vertical segment">
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

export default LocationBox;
