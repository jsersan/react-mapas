import React, { Component } from 'react';
import './App.css';

import Map from './components/Map';

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      markers: [
        {"id":1,"name":"Vitoria","lat":42.837077,"lng":-2.677081}, 
        {"id":2,"name":"Bilbao","lat":43.2845875,"lng":-2.9647328},
        {"id":3,"name":"La Palma","lat":28.6043219,"lng":-17.7783719},
        {"id":4,"name":"Las Palmas","lat":28.106372,"lng":-15.450543}, 
        {"id":5,"name":"Fuerteventura","lat":28.512402,"lng":-13.867148}]
    }
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  play() {
    this.refs.map.onPlay();
  }
  stop() {
    this.refs.map.onStop();
  }
  next() {
    this.refs.map.onNext();
  }
  previous() {
    this.refs.map.onPrevious();
  }
  render() {
    const { markers } = this.state;
    return (
      <div className="App">
        <div className="card">
          <div className="card-content">
            <Map
              ref="map"
              markers={markers}
              centerMapCoordinates={[42.8370802, -2.679235 ]}
            />
            <div>
              <button className="waves-effect waves-light btn" onClick={ this.previous }>
                <i className="material-icons">keyboard_arrow_left</i>
              </button>
              <button className="waves-effect waves-light btn" onClick={ this.play }>
                <i className="material-icons">play_arrow</i>
              </button>
              <button className="waves-effect waves-light btn" onClick={ this.stop }>
                <i className="material-icons">stop</i>
              </button>
              <button className="waves-effect waves-light btn" onClick={ this.next }>
                <i className="material-icons">keyboard_arrow_right</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
