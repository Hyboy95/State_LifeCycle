import { useState } from "react";
import Home from "./Home";

export default function LoginLogout() {
    const [login, setLogin] = useState(false);
    const handleLogIn = () => {
        setLogin(true)
    }
    const handleLogOut = () => {
        setLogin(false)
    }
    if (!login) {
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <h1>Please Log in</h1>
                    <button onClick={handleLogIn}>Log in</button>
                </div>
            </div>
        );
    }
    return (
        (<Home onLogOut={handleLogOut} />)
    );
}