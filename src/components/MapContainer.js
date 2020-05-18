import React, { Component } from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

const googleAPI = process.env.GATSBY_GOOGLE_API_KEY

const MyMapStyles = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36,
      },
      {
        color: "#000000",
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#000000",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        saturation: "-100",
      },
      {
        lightness: "30",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        gamma: "0.00",
      },
      {
        lightness: "74",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "all",
    stylers: [
      {
        lightness: "3",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 17,
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
            url: "../icons/Icon-88.png",
          }}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleAPI,
})(Maps)
