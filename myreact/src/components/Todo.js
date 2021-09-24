import { useState } from 'react';

function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

    const handleImput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js')
            ? 'You need JavaScript skill to complete the task. Do you have it?'
            : null;

        setTodo(inputValue);
        setWarning(updatedWarning);
    };
    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" valu={todo} onChange={handleImput} />
            </p>
            <hr />
            <h2>{warning || 'Good Choice'}</h2>
        </div>
    );
}
export default Todo;
