import  { useState } from 'react';
import './Register.css'; 
import { Link } from 'react-router-dom';

function RegisterForm() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Form submitted:', formData);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <p className="title">Register</p>
            <p className="message">Signup now and get full access to our app.</p>
            <div className="flex">
                <label>
                    <input
                        required
                        name="firstname"
                        type="text"
                        className="input"
                        value={formData.firstname}
                        onChange={handleChange}
                        placeholder=""
                    />
                    <span>Firstname</span>
                </label>
                <label>
                    <input
                        required
                        name="lastname"
                        type="text"
                        className="input"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder=""
                    />
                    <span>Lastname</span>
                </label>
            </div>
            <label>
                <input
                    required
                    name="email"
                    type="email"
                    className="input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                />
                <span>Email</span>
            </label>
            <label>
                <input
                    required
                    name="password"
                    type="password"
                    className="input"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder=""
                />
                <span>Password</span>
            </label>
            <label>
                <input
                    required
                    name="confirmPassword"
                    type="password"
                    className="input"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder=""
                />
                <span>Confirm password</span>
            </label>
            <button type="submit" className="submit">Submit</button>
            <p className="signin">Already have an account? <Link to="/login">Signin</Link></p>
        </form>
    );
}

export default RegisterForm;
