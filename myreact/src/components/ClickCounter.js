/* eslint-disable no-undef */
import React from 'react';
// import withCounter from './HOC/withConter';
// eslint-disable-next-line react/prefer-stateless-function
// eslint-disable-next-line no-unused-vars
export default function ClickCounter({ count, incrementCount }) {
    // state = {
    //     count: 0,
    // };

    // incrementCount = () => {
    //     this.setState((prevState) => ({ count: prevState.count + 1 }));
    // };

    return (
        <div>
            <button type="button" onClick={incrementCount}>
                {' '}
                Clicked {count} times
            </button>
        </div>
    );
}

// const ClickCounter = (props) => {
//     const { count, incrementCount } = props;
//     return (
//         <div>
//             <button type="button" onClick={incrementCount}>
//                 {' '}
//                 Clicked {count} times
//             </button>
//         </div>
//     );
// };
// export default withCounter(ClickCounter);
