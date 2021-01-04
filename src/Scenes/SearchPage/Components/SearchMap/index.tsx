import * as React from 'react';
import './style.css';
import GoogleMapReact, { Coords } from 'google-map-react';
import MiniHouse from './Components/MiniHouse';

interface SearchMapState {
  center: Coords;
  zoom: number;
}

class SearchMap extends React.Component<{}, SearchMapState> {
  constructor() {
    super();
    this.state = {
      center: {lat: 37.7749, lng:  -122.4194},
      zoom: 15
    };
  }
  onMapChange = (newMapState: SearchMapState) => {
    this.setState(newMapState);
  }
  render() {
    return (
      <div className="searchMap">
        <GoogleMapReact
          center={this.state.center}
          zoom={this.state.zoom}
          onChange={this.onMapChange}
          bootstrapURLKeys={{
            key: 'AIzaSyBuinFicS4HAGfIKW6rRutGFP9GWcReUn4'
          }}
        >
          <MiniHouse lat={37.7749} lng={-122.4194} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SearchMap;