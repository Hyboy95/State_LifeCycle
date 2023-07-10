import { useState } from "react";

export default function CountClick() {
    let [result, setResult] = useState(0);
    const handleClick = (check) => {
        result = check === 'up' ? result + 1 : result - 1;
        setResult(result)
    }

    return (
        <>
            <button onClick={() => handleClick('up')}>Increase</button>
            <p>{result}</p>
            <button onClick={() => handleClick('down')}>Decrease</button>
        </>
    );
}