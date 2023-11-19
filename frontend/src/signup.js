import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'

function Signup() {
    const [values, setValues] = useState({
        name: '',
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
        if (err.name === "" && err.email === "" && err.password === "") {
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');

            })
        
            .catch(err => console.log(err));
            
        }

    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Registreeri kasutaja</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name"><strong>Nimi:</strong></label>
                    <input type="text" placeholder='Sisesta nimi' name='name'
                    onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" placeholder='Sisesta email' name='email'
                    onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Salasõna:</strong></label>
                    <input type="password" placeholder='Sisesta salasõna' 
                    onChange={handleInput} className='form-control rounded-0' name='password'></input>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn align-items-center btn-primary w-100 rounded-0'><strong>Registreeri</strong></button>
                <p></p>
                <Link to="/" className='btn btn-light w-100 bg-light rounded-0'>Logi sisse</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup