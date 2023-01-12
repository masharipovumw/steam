import React from 'react'

const Register = () => {
    return (
        <div className='container'>
            <div className="register_container">
                <div className='register_menu'>
                    <h1 className='rainbow'>Registratsia</h1>
                    <div className='input_line'>
                        <input
                            type='email'
                            placeholder='email'
                            className='email_line'
                        />
                    </div>
                    <div className='password_line'>
                        <input
                            type='password'
                            className='password_line'
                            placeholder='password'
                        />
                    </div>
                    <a href='#' className='forg'>
                        Forgotten password ?
                    </a>
                    <div className='button_line'>
                        <button className='register_btn'>
                            <a href='/home'>Send</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
