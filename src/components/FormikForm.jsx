import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup'


const FormikForm = () => {
   return(
        
        <Formik
        initialValues={{email:"",password:""}}
        onSubmit={(values,{setSubmitting}) =>{
            setTimeout(() => {
                console.log("Logging in",values)
            }, 500);
        }}

        //validation of form

        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Email is required"),

            password: Yup.string()
                .required("Password is required")
                .min(4,"password is too short should be 4 character long")
                .matches(/(?=.*[0-9])/,"password should contain a number")
        })}

        >

            {props=>{
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                } = props;

                return(
                    
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <h2>Sign In</h2>
                        <label htmlFor="email">Email</label>

                        <input 
                        type="email" 
                        onChange={handleChange}  
                        onBlur={handleBlur} 
                        value={values.email}               
                        name="email"  
                        placeholder="Enter mail" 
                        className={errors.email && touched.email && "error"} 
                        /><br />
                        {errors.email && touched.email && (
                            <div>{errors.email}</div>
                        )}

                        <label htmlFor="password">Password</label>

                        <input 
                        type="password"
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.password} 
                        name="password"  
                        placeholder="Enter password" 
                        className={errors.password && touched.password && "error"} 
                        /><br />
                        {errors.password && touched.password && (
                            <div>{errors.password}</div>
                        )}
                        <button type="submit" disabled={isSubmitting}> Login </button>
                    </form>
                    
                )

            }}

        </Formik>
   );
};

export default FormikForm;
