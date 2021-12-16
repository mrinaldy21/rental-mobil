import React from "react";
import car1 from "../img/car-1.jpg"
import ico1 from "../img/ico-1.png"
import ico2 from "../img/ico-2.png"
import ico3 from "../img/ico-3.png"

const Home = () => {
  return (
    <div>
        <div className='text-center bg-image' style={{ marginTop: '50px', maxHeight: '40rem' }}>  
          <img src={car1} />
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>Heading</h1>
                <h4 className='mb-3'>Subheading</h4>
                <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card mt-5 mb-5">
            <div className="text-center">
              <h1>MENGAPA AL CAR ?</h1>
              <hr className=""/>
              <div className="row center">
                <div className="col-4 my-4 px-5">
                  <img className="rounded" style={{ maxWidth: '10rem' }}  src={ico1}/>
                  <p>Sewa mobil langsung dari partner terpercaya Movic dengan harga terbaik melalui aplikasi!</p>
                </div>
                <div className="col-4 my-4 px-5">
                  <img className="rounded" style={{ maxWidth: '10rem' }} src={ico2}/>
                  <p>Mudahkan pencarian mobilmu dengan fitur lokasi dan spesifikasi mobil yang ingin kamu sewa, temukan pilihan mobil terbaik di Movic!</p>
                </div>
                <div className="col-4 my-4 px-5">
                  <img className="rounded" style={{ maxWidth: '10rem' }} src={ico3}/>
                  <p>Rencanakan perjalanan ke bandara sangat mudah melalui Airport Transfer Movic, pesan sekarang jalan kemudian!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
