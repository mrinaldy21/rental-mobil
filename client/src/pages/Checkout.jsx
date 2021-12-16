import React from 'react'

const Checkout = () => {
  return (
    <div className="container" style={{ marginTop: '75px'}}>
      <div className='row'>
        <div className='col-10'>
        <div className='card my-4'>
          <div className='card-body'>
            <h2>Checkout</h2>
            <hr />
            <div className='box'>
              <lebel className="form-lebel">Name</lebel>
              <input type="text" 
                  name="name" 
                  className="form-control my-2" 
                  placeholder="Input here"
                  onChange={ (e) =>(e.target.value)}/>
              <lebel className="form-lebel">Name</lebel>
              <input type="text" 
                  name="name" 
                  className="form-control my-2" 
                  placeholder="Input here"
                  onChange={ (e) =>(e.target.value)}/>
              <lebel className="form-lebel">Name</lebel>
              <input type="text" 
                  name="name" 
                  className="form-control my-2" 
                  placeholder="Input here"
                  onChange={ (e) =>(e.target.value)}/>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Checkout
