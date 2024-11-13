import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class Register extends React.Component {
  render() {
    return (
      <div className="register-container">
        <h3 className="register-title" style={{textAlign: 'center', marginBottom:'20px'}}>REGISTER</h3>
        <div className="register-card" >
          <div className="register-card-body"  >
            <form className="register-form" > 
              <div className="form-group" >
                <div className="input-icon">
                  <i className="fas fa-user"></i>
                  <input type="text" name="username" className="form-control" placeholder="Enter Username" /> 
                </div>
              </div>
              <div className="form-group" >
                <div className="input-icon">
                  <i className="fas fa-id-card"></i>
                  <input type="text" name="firstName" className="form-control" placeholder="Enter First Name" /> 
                </div>
              </div>
              <div className="form-group"  >
                <div className="input-icon">
                  <i className="fas fa-id-card"></i>
                  <input type="text" name="lastName" className="form-control" placeholder="Enter Last Name" /> 
                </div>
              </div>
              <div className="form-group" >
                <div className="input-icon">
                  <i className="fas fa-phone"></i>
                  <input type="tel" name="phoneNumber" className="form-control" placeholder="Enter Phone Number" /> 
                </div>
              </div>
              <div className="form-group" >
                <div className="input-icon">
                  <i className="fas fa-lock"></i>
                  <input type="text" name="otp" className="form-control" placeholder="Enter OTP" /> 
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon">
                  <i className="fas fa-envelope"></i>
                  <input type="email" name="email" className="form-control" placeholder="Enter Email ID" />
                </div>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Register" /> 
              </div>
              <div>
                <button>  <Link className='nav-link' to ='/Login '>Login </Link> </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
