import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import useTitle from '../../../customHook/useTitle';

const Register = () => {

    const {creatUser}=useContext(AuthContext);
    const [btnDisable,setBtnDisable]=useState(false);
    useTitle('register')

    const handleRegister=(event)=>
    {
        event.preventDefault()
        const name=event.target.name.value;
        const photo=event.target.photo.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        // console.log(name,photo,email,password)
        creatUser(email,password)
        .then((result)=>{
            console.log(result.user)
        })
        .catch((error)=>{
            console.log(error.message)
        })

    }

    const handleRegisterButton=(event)=>{
        event.preventDefault()
        const button=event.target.checked;
        setBtnDisable(button)
    }
    console.log(btnDisable);
    return (
      <div className='container mx-auto w-50'>
        <h1>Please Register</h1>
        <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name='name' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Photo URL" name='photo' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleRegisterButton} name='accept'  label={<Link to={'/terms'} > accept terms and condition </Link>} />
                </Form.Group>
                <Button variant="primary" disabled={!btnDisable}  type="submit">
                    Register
                </Button> <br />
                <Form.Text className="text-success">
                    Already have an account..??<Link to='/login' >Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
      </div>
    );
};

export default Register;

 