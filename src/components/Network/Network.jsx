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
      layer.layer.map(neuron => {
        this.state.layers[index].push(<Neuron weights={neuron.weights} />);
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.layers.map((layer, index) => {
          layer.map(neuron => {
            neuron;
          });
        })}
      </div>
    );
  }
}

export default Network;
