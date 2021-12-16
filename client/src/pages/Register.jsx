import axios from "axios";
import React, { useState } from "react";
import car1 from "../img/Rental4.jpg";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfpassword] = useState('');
  const [msg, setMsg] = useState('');



  const Regis = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:3001/register', {
            name: name,
            email: email,
            password: password,
            confpassword: confpassword
        });
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
              <h2 className="text-center">REGISTER AL Car</h2>
              <div className="box" >
                <div className="row center">
                  <div className="col-10 my-4 px-5">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Name"
                    value={name} onChange={(e) => setName(e.target.value)} />
                    <label className="form-label mt-2">Email</label>
                    <input type="text" className="form-control" placeholder="Email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="form-label mt-2">Password</label>
                    <input type="password" className="form-control" placeholder="******"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label mt-2">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="******"
                    value={confpassword} onChange={(e) => setConfpassword(e.target.value)} />
                    <button className="btn btn-primary mt-3" onClick={Regis}>Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <img src={car1} style={{ maxWidth: '45rem' }} alt="car1" />
        </div>
      </div>
    </div>
  );
};

export default Register;
