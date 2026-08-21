import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");

        try {

            const response = await fetch(
                "http://localhost:8080/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        identifier,
                        password
                    })
                }
            );

            if (!response.ok) {
                throw new Error("Invalid credentials");
            }

            const data = await response.json();

            localStorage.setItem(
                "token",
                data.token
            );

            localStorage.setItem(
                "role",
                data.role
            );

            localStorage.setItem(
                "name",
                data.name
            );

            if (data.role === "STUDENT") {

                navigate("/student/dashboard");

            } else if (data.role === "PROFESSOR") {

                navigate("/professor/dashboard");

            }

        } catch (error) {

            setError(error.message);
        }
    };

    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-header">

                    <div className="logo-box">
                        LE
                    </div>

                    <h1>Lab Exam System</h1>

                    <p>Sign in to continue</p>

                </div>

                <form onSubmit={handleLogin}>

                    <label>
                        Enrollment Number / Email
                    </label>

                    <input
                        type="text"
                        placeholder="Enrollment Number / Email"
                        value={identifier}
                        onChange={(e) =>
                            setIdentifier(e.target.value)
                        }
                    />

                    <label>
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                {error && (
                    <p className="login-error">
                        {error}
                    </p>
                )}

            </div>

        </div>
    );
}

export default Login;