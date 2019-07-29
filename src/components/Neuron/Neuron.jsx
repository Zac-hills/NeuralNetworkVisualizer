import React, { Component } from "react";
import "./index.css";
class Neuron extends Component {
  state = {
    weights: [0.1, 0.9, 0.8],
    connections: [],
    positionX: 0,
    positionY: 0,
    width: 100,
    height: 100
  };

  render() {
    return (
      <svg width={this.state.width} height={this.state.height}>
        <defs>
          <linearGradient id="linear-gradient">
            {this.state.weights.map((weight, i) => (
              <stop
                offset={i / this.state.weights.length}
                stopColor={this.perc2color(weight * 100)}
              />
            ))}
          </linearGradient>
        </defs>
        <rect
          x={this.state.positionX}
          y={this.state.positionY}
          width={this.state.width}
          height={this.state.height}
          rx="15"
          fill="url(#linear-gradient)"
        />
      </svg>
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
