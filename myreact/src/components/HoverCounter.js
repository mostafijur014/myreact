/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import withCounter from './HOC/withConter';

// const HoverCounter = (props) => {
//     const { count, incrementCount } = props;
//     return (
//         <div>
//             <h1 onMouseOver={incrementCount}> Hoverd {count} times</h1>
//         </div>
//     );
// };
// export default withCounter(HoverCounter);
// import React from 'react';
// // import withCounter from './HOC/withConter';
// export default class HoverCounter extends React.Component {
//     state = {
//         count: 0,
//     };

//     incrementCount = () => {
//         this.setState((prevState) => ({ count: prevState.count + 1 }));
//     };

//     render() {
//         const { count } = this.state;
//         return (
//             <div>
//                 <h1 onMouseOver={this.incrementCount}> Hoverd {count} times</h1>
//             </div>
//         );
//     }
// }
// import React from 'react';
// // import withCounter from './HOC/withConter';
// export default class HoverCounter extends React.Component {
//     // state = {
//     //     count: 0,
//     // };

//     // incrementCount = () => {
//     //     this.setState((prevState) => ({ count: prevState.count + 1 }));
//     // };

//     render() {
//         const { count } = this.state;
//         return (
//             <div>
//                 <h1 onMouseOver={this.incrementCount}> Hoverd {count} times</h1>
//             </div>
//         );
//     }
// }
import React from 'react';
// import withCounter from './HOC/withConter';
// eslint-disable-next-line react/prefer-stateless-function
export default function HoverCounter({ count, incrementCount }) {
    return (
        <div>
            <h3 onMouseOver={incrementCount}> Hoverd {count} times</h3>
        </div>
    );
}
