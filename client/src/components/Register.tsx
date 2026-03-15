import React, { useState } from "react";

export default function Register() {
    const [formData, setFormData] = useState({
        password: "",
        email: "",
        fullName: ""
    })

    async function handelSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    function handelChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <form onSubmit={handelSubmit}>
            <h2>Register</h2>
            <label htmlFor="fullName">FullName: </label>
            <input type="text" name="fullName" id="fullNmae" value={formData.fullName} onChange={handelChange} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handelChange} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handelChange} />

            <label htmlFor="role">Role:</label>
            <select name="role" id="role">
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}