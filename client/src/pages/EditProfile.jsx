import React, { useState} from 'react'

const EditProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, useBirthdate] = useState('');
    const [gender, useGender] = useState('');
    const [avatar, useAvatar] = useState('');
    const [type, useType] = useState('');
    return (
        <div className="container" style={{ marginTop: "75px"}}>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card body my-3">
                            <h2>EDIT USER</h2>
                            <hr />
                            <div className="box">
                                <div className="row">
                                    <div className="col-8 my-4 px-5">
                                        <lebel className="form-lebel">Name</lebel>
                                        <input type="text" 
                                            name="name" 
                                            className="form-control my-2" 
                                            placeholder="Input here"
                                            value={name}
                                            onChange={ (e) => setName(e.target.value)}/>
                                        <lebel className="form-lebel">EMAIL</lebel>
                                        <input type="text" 
                                            name="email" 
                                            className="form-control my-2" 
                                            placeholder="Input here"
                                            value={email}
                                            onChange={ (e) => setName(e.target.value)}/>
                                        <lebel className="form-lebel">BIRTHDATE</lebel>
                                        <input type="text" 
                                            name="birthdate" 
                                            className="form-control my-2" 
                                            placeholder="Input here"
                                            value={birthdate}
                                            onChange={ (e) => setName(e.target.value)}/>
                                        <lebel className="form-lebel">GENDER</lebel>
                                        <input type="text" 
                                            name="gender" 
                                            className="form-control my-2" 
                                            placeholder="Input here"
                                            value={gender}
                                            onChange={ (e) => setName(e.target.value)}/>
                                        <lebel className="form-lebel">AVATAR</lebel>
                                        <input type="text" 
                                            name="avatar" 
                                            className="form-control my-2" 
                                            placeholder="Input here"
                                            value={avatar}
                                            onChange={ (e) => setName(e.target.value)}/>
                                        <lebel className="form-lebel">type</lebel>
                                        <input type="text" 
                                            name="type" 
                                            className="form-control my-2" 
                                            placeholder="Input here"
                                            value={type}
                                            onChange={ (e) => setName(e.target.value)}/>
                                        <button className="btn btn-primary mt-3" type="button">SAVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
