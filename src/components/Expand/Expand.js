import { useState } from "react";
import Content from "./Content";

export default function Expand() {
    const [isExpand, setIsExpand] = useState(false);
    const handleExpand = () => {
        setIsExpand(true);
    }
    const handleCollapse= () => {
        setIsExpand(false);
    }
    let content;
    if (isExpand) {
        content = <Content collapse = {handleCollapse}/>
    } else content = <button onClick={handleExpand}>Xem giới thiệu</button>
    return (
        <>
            <div style={{
                marginTop: 50,
                position: "relative",
                backgroundColor: "green",
                width: "100%",
                height:100
            }}>
                <h1 style={{
                    margin: 0,
                    color: "white",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                }}>Conditional Rendering</h1>
            </div>
            {content}  
        </>     
    );
}