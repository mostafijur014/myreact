import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange } = this.props;
        const { change: nextChange } = nextProps;
        if (currentChange === nextChange) {
            return false;
        }
        return true;
    }

    render() {
        const { change, locale } = this.props;
        return (
            <button type="button" onClick={() => change(locale)}>
                {locale === 'bn-BD' ? 'Change Clock' : 'Change Clock'}
            </button>
        );
    }
}

export default Button;
