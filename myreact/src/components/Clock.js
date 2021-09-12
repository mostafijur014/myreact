/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class Clocks extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    // constructor(props) {
    //     super(props);
    // eslint-disable-next-line react/no-unused-state
    //     this.state = { date: new Date() };
    // }
    state = { date: new Date(), locale: 'bn-BD' };

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

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    handleClickForBd = () => {
        this.setState({
            locale: 'bn-BD',
        });
    };

    // eslint-disable-next-line class-methods-use-this
    render() {
        console.log('Clock Components Render');
        const { date, locale } = this.state;
        // const { locale } = this.props;
        return (
            <div>
                <h1 className="head">
                    <span className="myClass">
                        New Clock {this.props.children} {this.state.date.toLocaleTimeString(locale)}
                    </span>
                </h1>
                <div>
                    <Button change={this.handleClick} locale="en-US">
                        {' '}
                        Click Here
                    </Button>
                </div>
            </div>
        );
    }
}

export default Clocks;
