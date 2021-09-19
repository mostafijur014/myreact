import React from 'react';
// import withCounter from './HOC/withConter';
export default class ClickCounter extends React.Component {
    // state = {
    //     count: 0,
    // };

    // incrementCount = () => {
    //     this.setState((prevState) => ({ count: prevState.count + 1 }));
    // };

    render() {
        return (
            <div>
                <button type="button" onClick={this.incrementCount}>
                    {' '}
                    Clicked {this.count} times
                </button>
            </div>
        );
    }
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
