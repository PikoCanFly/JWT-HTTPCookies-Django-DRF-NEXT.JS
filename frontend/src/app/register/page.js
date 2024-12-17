"use client"
import React from "react";
import { useState } from "react";
import { registerUser } from "../../../utils/auth";

export default function registerPage() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(userName==="" || password==="" || email==="") {
            return
        }
        try {
            await registerUser(email, userName, password)
            alert("Yay! It worked! User Created!")
        }
        catch (e) {
            alert("OOps!")
        }
      
    }
	return (
		<div className="min-h-screen bg-gray-100 items-center flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="bg-gray-600 p-8 flex flex-col rounded-lg"> 
				<label>Username</label>

				<input className="text-gray-600" type="text" value={userName} required
                onChange={(e)=>{setUserName(e.target.value)}}/>
				<br />

				<label>Email</label>
				<input className="text-gray-600" type="email" value={email} required 
                onChange={(e)=>{setEmail(e.target.value)}}/>
				<br />

				<label>Password</label>
				<input className="text-gray-600" type="password" value={password} required 
                onChange={(e)=>{setPassword(e.target.value)}}/>
				<br />

				<button
                className="bg-blue-400 p-1 rounded-sm"
                type="submit">Register</button>
			</form>
		</div>
	);
}
