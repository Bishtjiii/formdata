import React, { useState } from "react";
import "./index.css"
const Forms = () =>{

    const [ data, setData] = useState( {
        name: "",
        email: "",
        password: "",
    });
   

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        
        const {value,name} = event.target;

        setData((prevValue) => {
            console.log(prevValue);

            return{
                ...prevValue,
                [name]: value,
            };
        })

    }

    const onSubmits = (event) =>{
        // event.preventDefault();
        alert("form submitted");
    }

    return(
        <>
        <form onSubmit={onSubmits}>
        <h3>Hello {data.name} {data.email} {data.password}</h3>
        <input type="text" placeholder="Enter Name" name="name" onChange={inputEvent} value={data.name} /><br/>
        <input type="email" placeholder="Enter Email" name="email" onChange={inputEvent} value={data.email} /><br/>
        <input type="password" placeholder="Enter Password" name="password" onChange={inputEvent} value={data.password} /><br/>
        <button type="submit"  className="App-link">Click Me</button>
        </form>
        </>
    );
};

export default Forms;