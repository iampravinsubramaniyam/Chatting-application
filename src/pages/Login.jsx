import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <section className = "form-container">
        <div className="form-wrapper">
            <span className = "logo">Messenger</span>
            <span className = "title">Login</span>
            <form action="">
                <input 
                    type="email"
                    placeholder='user email' 
                />
                <input 
                    type="password"
                    placeholder='Password'
                />
                <button>Sign in</button>
            </form>
            <p>you do have an account? <Link to = '/register'>Register</Link></p>
        </div>

    </section>
  )
}

export default Login;