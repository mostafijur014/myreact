/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import withCounter from './HOC/withConter';

const HoverCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <h1 onMouseOver={incrementCount}> Hoverd {count} times</h1>
        </div>
    );
};
export default withCounter(HoverCounter);
