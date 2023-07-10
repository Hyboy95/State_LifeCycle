import { useState } from "react";
import Hello from "./Hello";

export default function Alert() {
    let [display, setDisplay] = useState(true);
    let component;
    const deleteComponent = () => {
        if (window.confirm('Are you sure delete?')){
            setDisplay(false)
        }
    }
    if (display) {
        component = <Hello />
    }
    return (
        <div style={{ textAlign: 'center' }}>
            {component}
            <button onClick={deleteComponent}>
                Delete the component
            </button>
        </div>
    );
}