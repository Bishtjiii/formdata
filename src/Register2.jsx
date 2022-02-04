import React, { useState, useEffect } from 'react';
import Validate from './Validate';
                                         
function Register2() {

    const [data,setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmpassword:"",
    });

    const [dataError,setDataError] = useState({});
    const[isSubmit,setIsSubmit] = useState(false);

    const inputHandle = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);

        const{value,name} = event.target;

        setData((preValue) =>{
            console.log(preValue);

            return{
                ...preValue,
                [name] : value,
            };
        })

        // setData({...data,[name]:value});
    }

    useEffect(()=>{
        console.log(dataError);
        if(Object.keys(dataError).length === 0 && isSubmit){
            console.log(data);
        }
    },[dataError])

    const submitForm = (event) =>{
        event.preventDefault();
        setDataError(Validate(data));
        setIsSubmit(true);
    }
 
        
    return (
      <div className='App container col-6'>
          {Object.keys(dataError).length === 0 && isSubmit ? (
              <div>Signed up successfully</div>
          ):(
          <pre>{JSON.stringify(data, undefined, 2)}</pre>
          )}
        
        <h3>New User Registration Form</h3>
        <form onSubmit={submitForm} noValidate>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor='firstName'>First Name :</label>
              <input
                placeholder='Enter First Name'
                type='text'
                name='firstName'
                onChange={inputHandle}
                value={data.firstName}         
                noValidate
              />
            </div>
            <p className="error">{dataError.firstName}</p>
            <div className='col-md-6'>
              <label htmlFor='lastName'>Last Name :</label>
              <input
                placeholder='Enter Last Name'
                type='text'
                name='lastName'
                onChange={inputHandle}
                value={data.lastName}        
                noValidate
              />
            </div>
            <p className="error">{dataError.lastName}</p>
          </div>
 
          <div className='mb-3'>
            <label htmlFor='email'>Email :</label>
            <input
              placeholder='Enter Email'
              type='email'
              name='email'
              onChange={inputHandle}
              value={data.email}
              noValidate
            />
          </div>
          <p className="error">{dataError.email}</p>
          <div className='mb-3'>
            <label htmlFor='password'>Password :</label>
            <input
              placeholder='Enter Password'
              type='password'
              name='password'
              onChange={inputHandle}
              value={data.password}
              noValidate
            />
          </div>
          <p className="error">{dataError.password}</p>
          <div className='mb-3'>
            <label htmlFor='confirmpassword'>Confirm Password :</label>
            <input
              placeholder='Enter Password'
              type='password'
              name='confirmpassword'
              onChange={inputHandle}
              value={data.confirmpassword}
              noValidate
            />
          </div>
          <p className="error">{dataError.confirmpassword}</p>
          <div className='mb-3'>
            <button type='submit'>Create Account</button>
          </div>
        </form>
      </div>
    );
        
}

export default Register2;