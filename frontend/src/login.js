import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios';


function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    
    const navigate = useNavigate();

    const [errors, setErrors] = useState({})
    
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if (err.email === "" && err.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success") {
                    navigate('/home');

                } else {
                    alert("No record");

                }

            })
        
            .catch(err => console.log(err));
            
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Logi sisse</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" placeholder='Sisesta email' name='email'
                    onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Salasõna:</strong></label>
                    <input type="password" placeholder='Sisesta salasõna' name='password'
                    onChange={handleInput} className='form-control rounded-0' ></input>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit 'className='btn align-items-center btn-primary w-100 rounded-0'><strong>Logi sisse</strong></button>
                <p></p>
                <Link to="/signup" className='btn btn-light w-100 bg-light rounded-0'>Loo konto</Link>
            </form>
        </div>
    </div>
  )
}

export default Login
