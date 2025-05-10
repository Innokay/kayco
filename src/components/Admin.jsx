import React from 'react'
import AddProduct from './AddProduct'

const Admin = () => {
  return (
    <div>
      <h1>Welcome To The Admin panel</h1>
        <section className='row'>
        <div className="col-md-12 card m-3 p-3 shadow text-success">
            <AddProduct />
        </div>
        </section>

    </div>
  )
}

export default Admin
