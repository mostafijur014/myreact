import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Bracket extends React.Component {
    addBracket = (text) => `[ ${text} ]`;

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addEmoji: this.addEmoji });
    }
}
