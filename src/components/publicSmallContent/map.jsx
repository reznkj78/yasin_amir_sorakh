import React, {Component} from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import MapboxLanguage from 'mapbox-gl-language';

export default class Map extends Component {

  state = {
    viewport: {
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }
  };

  _onLoad = (event) => {
    const map = event.target;
    map.addControl(new MapboxLanguage({
      defaultLanguage: 'zh',
    }));
    
    // Set following line to run will fix the chinese label display problem
    // map.setLayoutProperty('country-label-lg', 'text-field', ['get', 'name_zh']);
  }

  render() {
    return (
      <StaticMap
        {...this.state.viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/light-v9"
        onLoad={this._onLoad} />
    );
  }

}

