import React from 'react'
import { RiImageCircleFill } from "react-icons/ri";
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <section className = "form-container">
        <div className="form-wrapper">
            <span className = "logo">Messenger</span>
            <span className = "title">Register</span>
            <form action="">
                <input 
                    type="text" 
                    placeholder='User Name'
                />
                <input 
                    type="email"
                    placeholder='user email' 
                />
                <input 
                    type="password"
                    placeholder='Password'
                />
                <input style = {{"display": "none"}} type="file" id = "file"/>
                <label htmlFor="file">
                    <RiImageCircleFill 
                        style = {
                            {
                                width: "30px",
                                height: "30px",
                                opacity: "0.5"
                            }
                        }
                    />
                    Add an Avatar
                </label>

                <button>Sign up</button>
            </form>
            <p>you do have an account? <Link to = '/'>Login</Link></p>
        </div>

    </section>
  )
}

export default Register