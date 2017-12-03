import React from 'react';
import MeterAdoptiveContainer from '../meter/MeterAdoptiveContainer';

class HomePage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      min: 0,
      max: 50,
      mean: 25,
      value: 0
    };

    this.interval = setInterval(() => {this.setState((prevState, props) =>  {
        return {
            value: Math.round((prevState.max - prevState.min) * Math.random())
        };
      });
    }, 2000);
  }
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1>Demo page</h1>
                </div>
                <div className="cont">
                    <MeterAdoptiveContainer
                       value={this.state.value}
                       minValue={this.state.min}
                       maxValue={this.state.max}
                       meanValue={this.state.mean}
                       containerClass="cold-hot" />
                </div>
                <div className="cont2">
                    <MeterAdoptiveContainer
                       value={this.state.value}
                       minValue={this.state.min}
                       maxValue={this.state.max}
                       meanValue={this.state.mean}
                       containerClass="cold-hot" />
                </div>
                <div className="cont3">
                    <MeterAdoptiveContainer
                       value={this.state.value}
                       minValue={this.state.min}
                       maxValue={this.state.max}
                       meanValue={this.state.mean}
                       containerClass="cold-hot" />
                </div>
                <div className="cont4">
                    <MeterAdoptiveContainer
                       value={this.state.value}
                       minValue={this.state.min}
                       maxValue={this.state.max}
                       meanValue={this.state.mean}
                       containerClass="cold-hot" />
                </div>
            </div>
        );
    }
}

export default HomePage;
