import React, { useState } from 'react'
import axios from 'axios';

const AddCar = () => {
    const [name, setName] = useState('');
    const [harga_sewa, setHarga] = useState('');
    const [penumpang, setPenumpang] = useState('');
    const [bagasi, setBagasi] = useState(false);
    const [pintu, setPintu] = useState('');
    const [ac, setAc] = useState(false);
    const [type, setType] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [image, setImages] = useState('');
    const handleOnChangeBagasi = () => {
         setBagasi(!bagasi);
    };
    const handleOnChangeAc = () => {
        setAc(!ac);
    };

    const saveItem = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.set('key', image[0])
        console.log('test', formData)
        // axios.post('http://localhost:3001/cars/add',{
        // name: name,
        // harga_sewa: harga_sewa,
        // penumpang: penumpang,
        // pintu: pintu,
        // type: type,
        // deskripsi: deskripsi,
        // bagasi: bagasi,
        // ac: ac,
        // image: formData
        // });
        // window.location = 'http://localhost:3000/cars'
    }

    return (
        <div className="container" style={{ marginTop: '70px'}}>
            <div className="card my-4 mx-5">
                <div className="card-body">
                    <h2>Add Vehicles</h2>
                    <hr />
                    <div className="box" >
                        <div className="row">
                            <div className="col-8 my-4 px-5">
                                <lebel className="form-lebel">Name</lebel>
                                <input type="text" 
                                    name="name" 
                                    className="form-control my-2" 
                                    placeholder="Input here"
                                    value={name}
                                    onChange={ (e) => setName(e.target.value)}/>
                                <lebel className="form-lebel">Harga Sewa</lebel>
                                <input type="number" 
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
                                <lebel className="form-lebel">Pintu</lebel>
                                <input type="text" 
                                    name="pintu" 
                                    className="form-control my-2" 
                                    placeholder="Input here"
                                    value={pintu}
                                    onChange={ (e) => setPintu(e.target.value)}/>
                                <lebel className="form-lebel">TYPE</lebel>
                                <input type="text" 
                                    name="type" 
                                    className="form-control my-2" 
                                    placeholder="Input here"
                                    value={type}
                                    onChange={ (e) => setType(e.target.value)}/>
                                <lebel className="form-lebel">Deskripsi</lebel>
                                <input type="text" 
                                    name="deskripsi" 
                                    className="form-control my-2" 
                                    placeholder="Input here"
                                    value={deskripsi}
                                    onChange={ (e) => setDeskripsi(e.target.value)}/>
                                <lebel className="form-lebel">Foto</lebel>
                                <input type="file" 
                                    name="image" 
                                    className="form-control my-2" 
                                    placeholder="Input here"
                                    files={image}
                                    onChange={ (e) => setImages(e.target.files)}/>
                                    {console.log('testttttt',image)}
                                <lebel className="form-lebel my-2">Bagasi</lebel>
                                <input type="checkbox" 
                                    name="bagasi" 
                                    className="form-check-input mx-3" 
                                    placeholder="Input here"
                                    value={bagasi}
                                    checked={bagasi}
                                    onChange={handleOnChangeBagasi}/>
                                <br />
                                <lebel className="form-lebel mt-3">AC</lebel>
                                <input type="checkbox" 
                                    name="ac" 
                                    className="form-check-input mx-3" 
                                    placeholder="Input here"
                                    value={ac}
                                    checked={ac}
                                    onChange={handleOnChangeAc}/>
                                <br />
                                <div className="mt-3">
                                    <button className="btn btn-primary" type="button" onClick={saveItem}>SAVE</button>
                                </div>

                                {name} - { harga_sewa } - {penumpang} - {pintu} - {deskripsi} - {type}- {bagasi} - {ac} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCar
