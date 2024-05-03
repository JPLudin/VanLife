import React from "react"
import { useNavigate, useLocation  } from "react-router-dom"
import { loginUser  } from "../api"
import "../../css/login.css"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const location = useLocation()
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const navigate = useNavigate()
    const fromPath = location.state?.fromPath || "/host"

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(fromPath, { replace: true })
            }).catch((err) => {
                setError(err)
            }).finally(() => {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }        

    return (
        <div className="login-container">
            {
                location.state?.message && <h2 className="login-first">{location.state.message}</h2>   
            }
            <h1>Sign in to your account</h1>
            {
                error?.message && <h2 className="login-first">{error.message}</h2>   
            }
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button className="btn btn--primary" disabled={status === "submitting"}>
                    {
                        status === "submitting"
                        ? "Logging in...."
                        : "Log in"
                    }
                </button>
            </form>
        </div>
    )

}