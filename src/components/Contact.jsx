import React, {useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import "../style/style.scss";
import Input from "./Input";
import Button from "react-bootstrap/Button";

const Contact = ({...props}) => {
    const initValue = {name:"", email:"", message:""};
    const [formValues, setFormValue] = useState(initValue);
    const [formErrors, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValues, [name]:value})
        console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValues));
        setIsSubmit(true);
    }
    
    useEffect(() =>{
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log("berghasil");
            console.log(formValues);
            window.location.reload(false);
            window.history.scrollRestoration = 'manual'
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        }else if (!regex.test(values.email)){
            errors.email = "This is not a valid email format";
        }
        if (!values.message) {
            errors.message = "Message is required";
        }
        return errors
    }

    return (
        <div className="d-flex justify-content-center flex-column" {...props}>
            <h2 className="text-center mb-4" style={{ fontWeight:"700", marginTop:"70px" }}>CONTACT US</h2>
            <div className="w-100 d-flex justify-content-center ">
            <Form className="col-md-6 col-10" onSubmit={handleSubmit}>
                <Input label={"Name"} type="text" placeholder="Enter name" name="name" value={formValues.name} onChange={handleChange} />
                <p style={{ color:"red" }}>{formErrors.name}</p>
                <Input label={"Email"} type="email" placeholder="Enter email" name="email" value={formValues.email} onChange={handleChange}/>
                <p style={{ color:"red" }}>{formErrors.email}</p>
                <Input label={"Message"} type="email" as="textarea" rows={4} placeholder="Enter message" name="message" value={formValues.message} onChange={handleChange}/>
                <p style={{ color:"red" }}>{formErrors.message}</p>
                <Button type="submit" className="w-100" style={{ backgroundColor:"#587fdb" }}>SUBMIT</Button>
            </Form>
            </div>
        </div>
    )
}

export default Contact