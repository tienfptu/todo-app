import { useRef, useState } from 'react';

function App() {
    const inputRef = useRef();

    const [data, setData] = useState([]);

    const [search, setSearch] = useState('');

    const handleSubmit = () => {
        setData([
            ...data,
            {
                status: false,
                name: inputRef.current.value,
            },
        ]);
    };

    const handleCheck = (e, index) => {
        const newData = [...data];
        newData[index].status = e.currentTarget.checked;
        setData(newData);
    };

    return (
        <div>
            <h2>Todo list </h2>
            <div>
                <input ref={inputRef} />
                <button onClick={handleSubmit}>Add</button>
            </div>

            <div>
                <input placeholder="Enter keywords" onChange={(e) => setSearch(e.target.value)} />
            </div>

            <ul>
                {data
                    .filter((e) => e.name.includes(search))
                    .map((e, index) => (
                        <li>
                            {e.status ? <strike>{e.name}</strike> : <span>{e.name}</span>}

                            <input type="checkbox" checked={e.status} onChange={(ev) => handleCheck(ev, index)} />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default App;
