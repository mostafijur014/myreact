/* eslint-disable react/no-unused-state */
import React from 'react';
import { convert, toCelsius, toFahrenheit } from '../lib/converter';
import BoilingVerdict from './BollingVerdict';
import TemperatureInput from './TemperatureInput';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c',
    };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    onTemperatureChange = (e) => {
        this.setState({
            temperature: e.target.value,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}
