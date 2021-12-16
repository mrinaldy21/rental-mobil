import React, { useEffect, useState } from 'react'
import Car from './Car';
import { connect } from 'react-redux';
import { plusCar, minusCar, total } from '../redux/actions'
import { Link } from 'react-router-dom';
import { Instance } from '../helper/axios';



const Reservasi = (props) => {
    const [reservasi, setReservas] = useState([]);

    const tambahCar = (reservasi) => {
        props.plusCar(reservasi);
    }

    const kurangCar = (reservasi) => {
        props.minusCar(reservasi);
    }

    console.log('masuk+', reservasi)

    let cart = localStorage.getItem('cars')
    cart = cart ? JSON.parse(cart) : null
    console.log('cars', cart)

    async function handleClick() {
        try {
          const data = { cars: reservasi, };
          let StripeSuccessURL = await Instance.post("/stripe/payment", data).then(
            (res) => {
              return res.data.url;
            }
          );
          window.location = StripeSuccessURL;
        } catch (error) {
          console.log(error.response);
        }
        // setLoading(false);
      }


    return (
        <section className="py-4 container" style={{ marginTop: '75px'}}>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="col-sm-10">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-center">RESERVASI</h4>
                            <hr />
                            <table className="table ">
                                {console.log(props.reservasi)}
                            {props.reservasi.map((reserv)=> {
                                const total = '' ;
                                
                                return(
                                <tbody>
                                    <tr key={reserv.id}>
                                        <td>
                                            <img src={`http://${reserv.images[0].path}`} style={{  height:'50px' }}/>
                                        </td>
                                        <td>{reserv.name}</td>
                                        <td>Rp. {reserv.harga_sewa}</td>
                                        <input type='text'  value={reserv.qty}/>
                                        <td><button className='btn btn-primary mx-2' onClick={()=>kurangCar(reserv.id)}>-</button>
                                        <button className='btn btn-primary' onClick={()=>tambahCar(reserv.id)}>+</button></td>
                                        <td>{reserv.total = reserv.harga_sewa * reserv.qty}</td>
                                    </tr>
                                </tbody>
                            )})}
                            </table>
                            <button className='btn btn-primary' onClick={handleClick}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        reservasi: state.reservasi
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    plusCar: (id) => plusCar(dispatch, ownProps, id),
    minusCar: (id) => minusCar(dispatch, ownProps, id),
    total: () => minusCar(dispatch, ownProps),
  })
export default connect(mapStateToProps, mapDispatchToProps)(Reservasi);
