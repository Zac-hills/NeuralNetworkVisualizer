import React, { Component } from "react";
import "./index.css";
class Neuron extends Component {
  constructor(props) {
    super(props);
    Neuron.counter += 1;
    this.state = {
      weights: [],
      connections: [],
      positionX: 0,
      positionY: 0,
      width: 100,
      height: 100,
      id: Neuron.counter
    };
    console.log(props.weights);
    this.state.weights = props.weights;
  }
  static counter = 0;
  render() {
    return (
      <React.Fragment>
        <defs>
          <linearGradient id={`linear-gradient ${this.state.id}`}>
            {this.state.weights.map((weight, i) => (
              <stop
                offset={i / this.state.weights.length}
                stopColor={this.perc2color(weight * 100)}
              />
            ))}
          </linearGradient>
        </defs>
        <rect
          x={
            this.props.x * this.state.width + this.props.padding * this.props.x
          }
          y={
            this.props.y * this.state.height + this.props.padding * this.props.y
          }
          width={this.state.width}
          height={this.state.height}
          rx="15"
          fill={`url('#linear-gradient ${this.state.id}')`}
        />
      </React.Fragment>
    );
  }

  //color scale function will probably substitute a more standardized scale later
  perc2color(perc) {
    var r,
      g,
      b = 0;
    if (perc < 50) {
      r = 255;
      g = Math.round(5.1 * perc);
    } else {
      g = 255;
      r = Math.round(510 - 5.1 * perc);
    }
    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return "#" + ("000000" + h.toString(16)).slice(-6);
  }
}

export default Neuron;
