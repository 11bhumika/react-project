// import React from 'react';

// class Login extends React.Component
// {
// render()
//     {
//         return(
//             <>
//             <h3 style={{textAlign:'center', fontFamily:"unset"}}>Login </h3>
//             <div className="col-lg-12 text-center" style={{  padding:'200px'  }}>
//                     <div className="card" style={{width:'300px', height:'300px'  }}>
//                         <div className="card-body" style={{textAlign: 'center'}}>
//                             <form onSubmit style={{border: '2px solid green', padding:'20px'}}> 
//                             <div className="col-lg-12" mt-3 mb-3>
//                                 <input type= "text" name ="username" className="form-control" placeholder="Enter Username" /> 
//                             </div>
                            
//                             <div className="col-lg-12" mt-3 mb-3>
//                                 <input type= "password" name ="password" className="form-control"  placeholder="Enter Password" />
//                             </div>
//                             <div className="col-lg-12" mt-3 mb-3>
//                                 <input type= "submit"   className="form-control btn btn-primary" /> 
//                             </div>
//                             </form>

//                          </div>                         
//                     </div>
//                     </div>
//             </>
//         )
//     }
// }
// export default Login;

import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  render() {
    return (

        
      <div className="login-container">
        <h3 className="login-title">Login</h3>
        <div className="login-card">
          <div className="login-card-body">
            <form className="login-form"> 
              <div className="form-group">
                <div className="input-icon"> 
                    <i className="fas fa-user" ></i>
                <input type="text" name="username" className="form-control" placeholder="Enter Username" /> 
              </div>
              </div>
              <div className="form-group">
              <div className="input-icon">
                 <i className="fas fa-lock"></i>
                <input type="password" name="password" className="form-control" placeholder="Enter Password" />
              </div>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Submit" /> 
              </div>

              <div>
            <button> <Link className='nav-link' to ='/Register '>Register </Link>  </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
