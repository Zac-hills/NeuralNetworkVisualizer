import React, { Component } from "react";
import Neuron from "../Neuron/Neuron";
//{
//    layers: [
//      {
//        layer: [{ weights: [{}] }]
//      }
//    ]
//};
class Network extends Component {
  constructor(props) {
    super(props);
    this.state = { layers: [[]] };
    console.log(props.neuralNetwork);
    props.neuralNetwork.layers.map((layer, index) => {
      this.state.layers.push([]);
      layer.layer.map((neuron, xIndex) => {
        this.state.layers[index].push(
          <Neuron weights={neuron.weights} y={index} x={xIndex} padding={50} />
        );
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <svg width="100%" height="100%">
          {this.state.layers}
        </svg>
      </React.Fragment>
    );
  }
}

export default Network;
