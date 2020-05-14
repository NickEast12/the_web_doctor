import React, { Component } from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

const googleAPI = process.env.GOOGLE_API_KEY

const MyMapStyles = [
  {
    stylers: [
      {
        hue: "#ff1a00",
      },
      {
        invert_lightness: true,
      },
      {
        saturation: -100,
      },
      {
        lightness: 33,
      },
      {
        gamma: 0.5,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#2D333C",
      },
    ],
  },
]

export class Maps extends Component {
  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: MyMapStyles,
    })
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        disableDefaultUI={true}
        onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        initialCenter={{ lat: 51.23796, lng: -0.20949 }}
      >
        <Marker
          position={{ lat: 51.23796, lng: -0.20949 }}
          icon={{
            url: "../icons/icon-72x72.png",
          }}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleAPI,
})(Maps)
