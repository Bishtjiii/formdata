import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name:"",
  email:"",
  number:"",
  password:"",
}

const onSubmit = values => {
  console.log('form data',values)
}

// normal validation
// const validate = values =>{
//   let errors = {}

//   if(!values.name){
//     errors.name = 'Required'
//   }

//   if(!values.email){
//     errors.email = 'Required'
//   }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
//     errors.email = 'Invalid email format'
//   }

//   if(!values.number){
//     errors.number = 'Required'
//   }

//   if(!values.password){
//     errors.password = 'Required'
//   }

//   return errors;
// }

const numberRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  

  name: Yup.string().max(15, 'Must be 15 characters or less').required('Required!'),

  email: Yup.string().email('Invalid email address').required('Required!'),

  number:  Yup.string().required("Phone number is required").matches(numberRegExp, 'Phone number is not valid').min(10, "to short").max(10, "to long"),

  password: Yup.string().min(4, 'Must be 4 characters or more').required('Required!'),

})

const SignupForm = () =>{

    const formik = useFormik({
        initialValues,
        onSubmit,
        //validate, 
        validationSchema,
    })

    console.log('Visited Field',formik.touched)

    return(
        <div>
          <h2>Sign Up</h2>
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor='Name'>Name :</label>
              <input
                placeholder='Enter Name'
                type='text'
                name='name'
                {...formik.getFieldProps('name')}
                noValidate
              /><br />
              {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}

              <label htmlFor='Email'>Email :</label>
              <input
                placeholder='Enter Email'
                type='email'
                name='email'
                {...formik.getFieldProps('email')}
                noValidate
              /><br />
              {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

              <label htmlFor='Number'>Number :</label>
              <input
                placeholder='Enter Number'
                type='number'
                name='number'
                {...formik.getFieldProps('number')}
                noValidate
              /><br />
              {formik.touched.number && formik.errors.number ? <div className="error">{formik.errors.number}</div> : null}

              <label htmlFor='Password'>Password :</label>
              <input
                placeholder='Enter Password'
                type='password'
                name='password'
                {...formik.getFieldProps('password')}
                noValidate
              /><br />
              {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
              
              <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignupForm;