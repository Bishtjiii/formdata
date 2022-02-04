import React, { useState } from "react";
import "./index.css"

const Register = () =>{

    const [userRegistration, setUserRegistration] = useState({
        name:"",
        email:"",
        number:"",
        password:"",
        conPassword:"",
    }); 
    //const [records, setRecords] = useState();

    const handleInput = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);

        setUserRegistration({...userRegistration, [name]:value});
    }

    const onSubmits = (event) =>{
        event.preventDefault();
        
        // const newRecord = {...userRegistration, id=new Date().getTime().toString() }
        // setRecords([...records, newRecord]);

    };

    return(
        <>
        <h3>Register</h3>
        <form onSubmit={onSubmits}>
        <input type="text" autoComplete="off"   value={userRegistration.name} onChange={handleInput} name="name"  placeholder="Enter Name"  /><br />
        <input type="email" autoComplete="off"   value={userRegistration.email} onChange={handleInput} name="email"  placeholder="Enter Email" /><br />
        <input type="number" autoComplete="off"   value={userRegistration.number} onChange={handleInput} name="number"  placeholder="Enter Number" /><br />
        <input type="password" autoComplete="off"   value={userRegistration.password} onChange={handleInput} name="password"  placeholder="Enter Password" /><br />
        <input type="password" autoComplete="off"   value={userRegistration.conPassword} onChange={handleInput} name="conPassword"  placeholder="Enter Confirm Password" /><br />
        <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default Register;