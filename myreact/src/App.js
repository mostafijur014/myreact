/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Calculator from './components/Calculator';
import ClockList from './components/CkockList';
import ClickCounter from './components/ClickCounter';
import Clocks from './components/Clock';
import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
import Counter from './components/Counter';
import Counters from './components/Counters';
import Form from './components/Form';
import HoverCounter from './components/HoverCounter';
import Texts from './components/inheritance/Texts';
import MouseUp from './components/MouseUp';
import MyComponentClass from './components/MyComponentClass';
import Section from './components/Section';
import Todo from './components/Todo';
import User from './components/User';
import ThemeContext from './Contexts/themeContext';
import MyComponent from './MyComponent';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
    state = {
        theme: 'dark',
    };

    switchTheme = () => {
        this.setState(({ theme }) => {
            if (theme === 'dark')
                return {
                    theme: 'light',
                };
            return {
                theme: 'dark',
            };
        });
    };

    render() {
        const { theme } = this.state;
        const quantites = [1, 2, 3, 4, 5];
        // const [show, setShow] = useState;
        return (
            // <div>
            //    <Clocks locale="bn-BD" />
            // </div>
            <>
                {' '}
                <div>
                    <Clocks />
                </div>
                <div>
                    <ClockList quantites={quantites} />
                </div>
                <div>
                    <Form />
                    <br />
                    <Calculator />
                    <Texts />
                    <br />
                    <Emoji>
                        {({ addEmoji }) => (
                            <Bracket>
                                {({ addBracket }) => (
                                    <Text addEmoji={addEmoji} addBracket={addBracket} />
                                )}
                            </Bracket>
                        )}
                    </Emoji>
                    <br />
                    <Text />
                </div>
                <div className="app">
                    {/* <ClickCounter />
                <HoverCounter /> */}
                    <MouseUp />
                    <User render={(isLoggedIn) => (isLoggedIn ? 'Mr Mostafijur' : 'Guest')} />
                    <Counter>
                        {(counter, incrementCount) => (
                            <ClickCounter count={counter} incrementCount={incrementCount} />
                        )}
                    </Counter>

                    <Counter>
                        {(counter, incrementCount) => (
                            <HoverCounter count={counter} incrementCount={incrementCount} />
                        )}
                    </Counter>
                </div>
                <div className="apps">
                    {/* <Counter>
                    {(counter, incrementCount)} => (
                    <ClickCounter count={counter} incrementCount={incrementCount} />)
                </Counter> */}
                    <Section theme={theme} />
                    <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
                        {' '}
                        <Section />
                    </ThemeContext.Provider>
                    <Todo />
                    <Counters />
                    <div>
                        <p>We shall learn useEffect() today</p>
                        <MyComponentClass />
                        <MyComponent />
                        {/* <p>
                            <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
                                {show ? 'Hide Post' : 'Show Post'}
                            </button>
                        </p> */}
                    </div>
                </div>
            </>
        );
    }
}

// export default App;
