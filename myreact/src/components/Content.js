import React from 'react';
import ThemeContext from '../Contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

// eslint-disable-next-line react/prefer-stateless-function
export default class Content extends React.Component {
    componentDidMount() {
        console.log(this.context);
    }

    render() {
        const { theme, switchTheme } = this.context;
        return (
            <div>
                <h1>This is a content</h1>
                {/* <Counter>
                    {(counter, incrementCount) => (
                        // eslint-disable-next-line no-undef
                        <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} />
                    )}
                </Counter> */}
                <Counter>
                    {(counter, incrementCount) => (
                        // eslint-disable-next-line react/jsx-no-undef
                        // <ThemeContext.Consumer>
                        // {({ theme, switchTheme }) => (
                        <HoverCounter
                            count={counter}
                            incrementCount={incrementCount}
                            theme={theme}
                            switchTheme={switchTheme}
                        />
                        // )}
                        //  </ThemeContext.Consumer>
                    )}
                </Counter>
            </div>
        );
    }
}

Content.contextType = ThemeContext;
