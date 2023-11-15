import React from 'react'

export default function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
        <div className='bg-white p-3 rounded w-25'>
            <form action="">
                <div className='mb-3'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder='Sisesta email' className='form-control rounded-0'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Salasõna:</label>
                    <input type="password" placeholder='Sisesta salasõna' className='form-control rounded-0' ></input>
                </div>
                <button className='btn align-items-center btn-primary w-100'>Logi sisse</button>
                <p></p>
                <button className='btn btn-light w-100'>Loo konto</button>
            </form>
        </div>
    </div>
  )
}

