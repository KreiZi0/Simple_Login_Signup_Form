import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Registreeri kasutaja</h2>
            <form action="">
                <div className='mb-3'>
                    <label htmlFor="name"><strong>Nimi:</strong></label>
                    <input type="text" placeholder='Sisesta nimi' className='form-control rounded-0'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" placeholder='Sisesta email' className='form-control rounded-0'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Salasõna:</strong></label>
                    <input type="password" placeholder='Sisesta salasõna' className='form-control rounded-0' ></input>
                </div>
                <button className='btn align-items-center btn-primary w-100 rounded-0'><strong>Registreeri</strong></button>
                <p></p>
                <Link to="/" className='btn btn-light w-100 bg-light rounded-0'>Logi sisse</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup