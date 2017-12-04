import React, { PropTypes } from 'react';
import Meter from './Meter';

class MeterAdoptiveContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      displayMeter: false
    };

    this.setDivRef = this.setDivRef.bind(this);
    this.setWidth = this.setWidth.bind(this);
  }

  componentDidMount() {
    this.setWidth();
    window.addEventListener('resize', this.setWidth);
  }

  setWidth() {
    this.setState({
      width: this.divRef.clientWidth,
      displayMeter: true
    });
  }

  setDivRef(element) {
    this.divRef = element;
  }

  render() {
    let meter = this.state.displayMeter ?
      <Meter
        width={this.state.width}
        value={this.props.value}
        minValue={this.props.minValue}
        maxValue={this.props.maxValue}
        meanValue={this.props.meanValue}
        containerClass={this.props.containerClass}/> :
      '';

    return (
      <div ref={this.setDivRef}>
        {meter}
      </div>
    );
  }
}


MeterAdoptiveContainer.propTypes = {
  containerClass: PropTypes.string,
  footerContent: PropTypes.string,
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  meanValue: PropTypes.number.isRequired
};


export default MeterAdoptiveContainer;
