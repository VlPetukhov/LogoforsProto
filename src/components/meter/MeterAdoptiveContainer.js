import React from 'react';
import Meter from './Meter';

class MeterAdoptiveContainer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            width: 0,
            displayMeter: false
        };
    }

    componentDidMount() {
        this.setState({
            width: this.divRef.clientWidth ,
            displayMeter: true
        });
        console.log(this.divRef);
    }

    render () {
        let meter = this.state.displayMeter ?
            <Meter
                 width={this.state.width}
                 value={this.props.value}
                 minValue={this.props.minValue}
                 maxValue={this.props.maxValue}
                 meanValue={this.props.meanValue}
                 containerClass="cold-hot"/> :
            '';

        return (
            <div ref={element => this.divRef = element}>
                { meter }
            </div>
        );
    }
}

export default MeterAdoptiveContainer;
