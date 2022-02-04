const  Validate = (values) =>{
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex1 = /(^([a-zA-z]+)(\d+)?$)/;
    if(!values.firstName){
        errors.firstName = "Firstname is Required";
    }else if(!regex1.test(values.firstName)){
        errors.firstName = "FirstName format is invalid";
    }
    if(!values.lastName){
        errors.lastName = "Lastname is Required";
    }else if(!regex1.test(values.lastName)){
        errors.lastName = "lastName format is invalid";
    }
    if(!values.email){
        errors.email = "Email is Required";
    }else if(!regex.test(values.email)){
        errors.email = "This is not a valid email format";
    }
    if(!values.password){   
        errors.password = "Password is Required";
    }else if(values.password.length < 4){
        errors.password = "password must be more than 4 characters";
    }else if(values.password.length > 10){
        errors.password = "password must be less than 10 characters";
    }
    if(!values.confirmpassword){
        errors.confirmpassword = "Confirm Password is Required";
    }else if(values.password !== values.confirmpassword){
        errors.confirmpassword = "Confirm Password is not matching with password";
    }

    return errors;  

};

export default Validate;