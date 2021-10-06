import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

// * Styles
const mapStyles = {
  borderRadius: ".5rem",
  border: "1px solid black",
};

const containerStyle = {
  position: "relative",
  width: "50rem",
  height: "50rem",
};

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        containerStyle={containerStyle}
        style={mapStyles}
        initialCenter={{
          lat: 45.58814501631648,
          lng: 25.552150065611226,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"Club Rossignol"} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDVOzKLYn0JLHP9ppBHJEWv2L5zYKfko84",
})(MapContainer);
