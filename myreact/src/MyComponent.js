import { useEffect, useState } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());

    // eslint-disable-next-line no-unused-vars
    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        document.title = `Clicked ${count} times`;
        console.log('Updating Document Title');
    }, [count]);

    useEffect(() => {
        console.log('Starting Timing');
        setInterval(tick, 1000);
    }, []);

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}
