// import React from 'react';

// class Counter extends React.Component {
//     state = {
//         count: 0,
//     };

//     incrementCount = () => {
//         this.setState((prevState) => ({ count: prevState.count + 1 }));
//     };

//     render() {
//         // const { render } = this.props;
//         // const { count } = this.state;
//         // eslint-disable-next-line no-shadow
//         // const { count } = this.state;
//         // return render(count, this.incrementCount);

//         return <h1>Hello World</h1>;
//     }
// }
// export default Counter;
import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
    };

    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { children } = this.props;
        const { count } = this.state;
        return children(count, this.incrementCount);
        // return <h1>Hello World</h1>;
    }
}
export default Counter;
