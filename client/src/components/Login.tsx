import React, { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({
        password: "",
        email: ""
    })

    async function handelSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    function handelChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <form onSubmit={handelSubmit}>
            <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handelChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handelChange} />
            <button type="submit">Login</button>
        </form>
    )
}