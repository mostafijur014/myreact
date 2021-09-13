import ClockList from './components/CkockList';
import Clocks from './components/Clock';

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
        </>
    );
}

export default App;
