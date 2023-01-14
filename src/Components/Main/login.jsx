import React from 'react'

const Login = () => {
    return (
        <div className='container'>
            <div className='register_container'>
                <div className='register_menu'>
                    <h1 className='rainbow'>Login</h1>
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
                    <div className='password_line_return'>
                        <input
                            type='password'
                            className='password_line'
                            placeholder='confirm password'
                        />
                    </div>
                    <div className='button_line'>
                        <button className='register_btn'>
                            <a href='/'>Send</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
