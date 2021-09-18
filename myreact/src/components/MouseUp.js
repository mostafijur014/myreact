/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import withCounter from './HOC/withConter';

const MouseUp = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <h3 onMouseUp={incrementCount}> Mouseuped {count} times</h3>
        </div>
    );
};
export default withCounter(MouseUp);
