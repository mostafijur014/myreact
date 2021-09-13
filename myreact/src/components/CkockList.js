/* eslint-disable no-unused-vars */
import Clocks from './Clock';

export default function ClockList({ quantites = [] }) {
    return (
        <div>
            {quantites.map((clocks, index) => (
                <Clocks key={Math.random()} />
            ))}
        </div>
    );
}
