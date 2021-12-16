import  React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import car1 from "../img/Rental4.jpg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const Auth = async (e) => {
    console.log('test')
    e.preventDefault();
    try {
        console.log('masuk1')
        const token = await axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        });
        localStorage.setItem("token", JSON.stringify(token.data));
        window.location = 'http://localhost:3000/'
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  }
  return (
    <div className="container" style={{ marginTop: '70px'}}>
      <div className="row">
        <div className="col-sm-6">
          <div className="card mb-3 mt-3">
            <div className="card-body">
              <h2 className="text-center">LOGIN AL Car</h2>
              <div className="container">
                <div className="">
                  <div className="box " onSubmit={() => console.log('diklik')}>
                  <p className="has-text-centered">{msg}</p>
                  <div className="row center">
                    <div className="col-10 my-4 px-5">
                      <label className="form-label">Email</label>
                      <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      <label className="form-label mt-2">Password</label>
                      <input type="password" className="form-control" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                      <div className="mt-2">
                        <h8 className="fw-light">
                          Belum Punya Akun Kaos Ku? Daftar <Link to="/register">Disini</Link>
                        </h8>
                      </div>
                      <div className="mt-3">
                        <button className="btn btn-primary" type="button" onClick={Auth}>Login</button>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6" >
          <div className="center">
            <img src={car1} style={{ maxWidth: '45rem' }} alt="car1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
