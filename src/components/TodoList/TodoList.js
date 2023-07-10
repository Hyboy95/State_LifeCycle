import { useState } from "react";

export default function TodoList() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState('');

    const handleChange = (e) => {
        setItem(e.target.value);
    }
    const handleClick = () => {
        let index = list.findIndex(i => i === item);
        if (index === -1) {
            setList([...list, item])
            setItem('');
        }
        console.log(list);
    }
    return (
        <div style={{ textAlign: 'center', marginBottom: 100 }}>
            <h1>Todo List</h1>
            <div>
                <input type="text" value={item} onChange={(e) => handleChange(e)} />
                <button onClick={handleClick}>Add</button>
            </div>
            <div>
                <ul>
                    {list.map(val => (
                        <li>{val}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
}