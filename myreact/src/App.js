/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import Calculator from './components/Calculator';
import ClockList from './components/CkockList';
import ClickCounter from './components/ClickCounter';
import Clocks from './components/Clock';
import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
import Counter from './components/Counter';
import Form from './components/Form';
import HoverCounter from './components/HoverCounter';
import Texts from './components/inheritance/Texts';
import MouseUp from './components/MouseUp';
import Section from './components/Section';
import User from './components/User';

function App() {
    const quantites = [1, 2, 3, 4, 5];
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
                <Section />
            </div>
        </>
    );
}

export default App;
