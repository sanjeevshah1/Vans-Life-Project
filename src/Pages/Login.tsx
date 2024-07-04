import { useState } from "react"
import {Link, useLocation} from "react-router-dom"
const Login = () => {
    const location = useLocation();
    console.log(location)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name , value} = event.target;
        setFormData((prevFormData) => ({
                ...prevFormData,
                [name] : value,
            })
        )
       
    }
    console.log(formData)
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Helllo world")
    }

  return (
    <div className="login-container both-center column">
            {
                location.state?.message &&
                <>
                    <h4 style={{color: "red"}}>{location.state.message}</h4>
                    <br />
                </>
            }

        <h2>Sign in to your account</h2>
        <br />
        <form onSubmit={handleSubmit} className="both-center  column form">
            <input
                type="text"
                value={formData.email}
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="Email Address"
            />
            <input
                type="password"
                value={formData.password}
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="Password"
            />
            <button>Sign in</button>
            <p>Don't have an account? <Link to="#" id="new">Create one now</Link></p>
        </form>
    </div>
  )
}

export default Login