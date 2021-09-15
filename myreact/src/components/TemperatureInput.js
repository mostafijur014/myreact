import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};
// eslint-disable-next-line react/prefer-stateless-function
export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter Temperature in {scaleNames[scale]}</legend>
            <input
                type="text"
                value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </fieldset>
    );
}
