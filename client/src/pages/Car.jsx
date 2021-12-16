import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { add, total } from 'cart-localstorage'
import { useCart } from "react-use-cart"
import { connect, useDispatch } from 'react-redux';
import { addToCart, getCars } from '../redux/actions'

const Car = (props) => {

    let user = localStorage.getItem('token')
    user = user ? JSON.parse(user) : null
    console.log('user', user)

    const [cars, setCars] = useState([]);
    const {id} = useParams();
    const [reservasi, setReservasi] = useState([])

    const dispatch = useDispatch();
    const addCar = (reservasi) => {
        props.addToCart(reservasi);
    }

    useEffect(() => {
        getCar();
        
    },[]);


    const getCar = async () => {
        const cars = await axios.get('http://localhost:3001/cars');
        props.getCars(cars.data);
    }

    const deleteCar = async (id) =>{
        await axios.delete(`http://localhost:3001/cars/delete/${id}`);
        getCar();
    }


    return (
        <div className="container" style={{ marginTop: '75px'}}>
            {console.log('maskuk', props.reservasi)}
            <h2 className="mt-4">Car</h2>
            <hr />
            { user && user.type == "admin" && (<Link className="btn" to="/addcars">+ Add Car</Link>)}
            <div class="row my-3">
                {console.log('testt',props.cars)}
                { props.cars.map((car) => (
                <div class="col-3">
                    <tr key={car.id}>
                    <div className="card mb-3 mt-3" style={{ minWidth: '300px', maxWidth: '300px', }}>
                    <img src={`http://${car.images[0].path}`} class="card-img-top" style={{  height:'250px' }} alt="..."/>
                        <div className="card-body text-start">
                            <h3 class="card-text text-center">{car.name}</h3>
                            <p>Harga     : Rp. {car.harga_sewa}</p>
                            <p>Kapasitas : {car.penumpang}</p>
                            <p>type      : {car.type}</p>
                            { user && user.type == "user" && (<button className="btn btn-primary" onClick={()=>addCar(car.id)}  >RESERVASI</button>)}
                            <div className='text-center'>
                            { user && user.type == "admin" && (<Link to={`/editcars/${car.id}`} className="btn btn-primary mx-2">Edit</Link>)}
                            { user && user.type == "admin" && (<button onClick={() => deleteCar(car.id)} className="btn btn-danger mx-2">Delete</button>)}
                            </div> 
                        </div>
                    </div> 
                    </tr>
                </div>
                 )) }
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
  return {
      cars: state.cars,
      reservasi: state.reservasi
      
  }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  getCars: (data) => getCars(dispatch, ownProps, data),
  addToCart: (id) => addToCart(dispatch, ownProps, id)
})

export default connect(mapStateToProps, mapDispatchToProps)(Car)
