import React, { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom';
import axios from 'axios';

const EditCar = () => {
    const [name, setName] = useState('');
    const [harga_sewa, setHarga] = useState('');
    const [penumpang, setPenumpang] = useState('');
    const [bagasi, setBagasi] = useState(false);
    const [pintu, setPintu] = useState('');
    const [ac, setAc] = useState(false);
    const [type, setType] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [foto, setFoto] = useState('');
    const { id } = useParams();

    const saveItem = async (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/cars/edit/${id}`,{
        name: name,
        harga_sewa: harga_sewa,
        penumpang: penumpang,
        bagasi: bagasi,
        pintu: pintu,
        ac: ac,
        type: type,
        deskripsi: deskripsi,
        });
        window.location = 'http://localhost:3000/cars'
    }

    useEffect(() => {
        getCarById();
    },[]);

    const getCarById = async () => {
        const response = await axios.get(`http://localhost:3001/cars/${id}`);
        setName(response.data.name);
        setHarga(response.data.harga_sewa);
        setPenumpang(response.data.penumpang);
        setBagasi(response.data.bagasi);
        setPintu(response.data.pintu);
        setAc(response.data.ac);
        setType(response.data.type);
        setDeskripsi(response.data.deskripsi);
    }

    return (
        <div className="container" style={{ marginTop: '70px'}}>
            <div className="card my-4 mx-5">
                <div className="card-body">
                    <h2>Edit Car</h2>
                    <hr />
                    <div className="box">
                        <div className="row">
                            <div className="col-8 my-4 px--5">
                                <lebel className="form-lebel">Name</lebel>
                                <input type="text" 
                                    name="name" 
                                    className="form-control my-2" 
                                    placeholder="Input here"
                                    value={name}
                                    onChange={ (e) => setName(e.target.value)}/>
                                <lebel className="form-lebel">Harga Sewa</lebel>
                                <input type="text" 
                                    name="harga_sewa" 
                                    className="form-control my-2" 
                                    placeholder="Input here"
                                    value={harga_sewa}
                                    onChange={ (e) => setHarga(e.target.value)}/>
                                <lebel className="form-lebel">Penumpang</lebel>
                                <input type="text" 
                                    name="Penumpang" 
                                    className="form-control my-2" 
                                    placeholder="Input here"
                                    value={penumpang}
                                    onChange={ (e) => setPenumpang(e.target.value)}/>
                                <div class="form-check mb-3">
                                    <lebel className="form-lebel">Bagasi</lebel>
                                    <input type="checkbox" 
                                        name="bagasi" 
                                        className="form-check-input my-2" 
                                        placeholder="Input here"
                                        value={bagasi}
                                        onChange={ (e) => setBagasi(e.target.value)}/>
                                </div>
                                <lebel className="form-lebel">Pintu</lebel>
                                <input type="text" 
                                    name="pintu" 
                                    className="form-control my-2" 
                                    placeholder="Input here"
                                    value={pintu}
                                    onChange={ (e) => setPintu(e.target.value)}/>
                                <div class="form-check mb-3">
                                    <lebel className="form-lebel">AC</lebel>
                                    <input type="checkbox" 
                                        name="ac" 
                                        className="form-check-input my-2" 
                                        placeholder="Input here"
                                        value={ac}
                                        onChange={ (e) => setAc(e.target.value)}/>
                                </div>
                                <lebel className="form-lebel">Deskripsi</lebel>
                                <input type="text" 
                                    name="deskripsi" 
                                    className="form-control my-2" 
                                    placeholder="Input here"
                                    value={deskripsi}
                                    onChange={ (e) => setDeskripsi(e.target.value)}/>
                                {/* <lebel className="form-lebel">Foto</lebel>
                                <input type="file" 
                                    name="foto" 
                                    className="form-control my-2" 
                                    placeholder="Input here"
                                    value={foto}
                                    onChange={ (e) => setFoto(e.target.value)}/> */}
                                <div className="mt-3">
                                    <button className="btn btn-primary" type="button" onClick={saveItem}>SAVE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCar
