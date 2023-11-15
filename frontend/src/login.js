import React from 'react'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
        <div className='bg-white p-3 rounded w-25'>
            <form action="">
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" placeholder='Sisesta email' className='form-control rounded-0'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Salasõna:</strong></label>
                    <input type="password" placeholder='Sisesta salasõna' className='form-control rounded-0' ></input>
                </div>
                <button className='btn align-items-center btn-primary w-100 rounded-0'><strong>Logi sisse</strong></button>
                <p></p>
                <Link to="/signup" className='btn btn-light w-100 bg-light rounded-0'>Loo konto</Link>
            </form>
        </div>
    </div>
  )
}

