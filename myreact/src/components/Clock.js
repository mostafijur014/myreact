/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Clocks extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    // constructor(props) {
    //     super(props);
    // eslint-disable-next-line react/no-unused-state
    //     this.state = { date: new Date() };
    // }
    state = { date: new Date() };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <div>
                <h1 className="head">
                    <span className="myClass">
                        New Clock {this.props.children}{' '}
                        {this.state.date.toLocaleTimeString(this.props.locale)}
                    </span>
                </h1>
                <button> Click Here</button>
            </div>
        );
    }
}

export default Clocks;
