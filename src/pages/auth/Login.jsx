import React, {useRef, useState} from 'react';

import http from '../../services/http';

const Login = ({setToken}) => {

  const [hasError, setHasError] = useState(false);

  const onLogin = (e) =>{
    console.log(loginInput.current.value, passInput.current.value);
    e.preventDefault();
    http.post('/login', {
      email: loginInput.current.value, 
      password: passInput.current.value
    }).then((res)=>{
      window.localStorage.setItem('token', res.data.token);
            // setToken(res.data.token); settoken bunday kelmaydi
    }).catch(()=>{
      setHasError(true);
    })
  }

  const loginInput = useRef(null);
  const passInput = useRef(null);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h2>Login page</h2>
                        </div>
                        <div className="card-body">
                          {
                            hasError ? (
                              <div className="alert alert-danger" role="alert">
                                Login or Password is wrong!!!
                              </div>
                            ):(<></>)
                          }
                            <form onSubmit={onLogin}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input
                                        ref={loginInput}
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        // onChange={}
                                    />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input ref={passInput} type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 "></div>
            </div>
        </div>
    )
}

export default Login