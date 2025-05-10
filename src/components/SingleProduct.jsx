import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
    let [phone,setPhone] = useState()
    let [loading, setLoading] = useState()
    let [success, setSuccess] = useState("")
    let [error, setError] = useState("")

    const {product} = useLocation().state || {}
    const img_url = "https://Innoh.pythonanywhere.com/static/images/"

    const submitForm = async(e) => {
        e.preventDefault()
        setError("")
        setSuccess("")
        setLoading("Please wait as we process payment...")

        try {
            const data = new FormData()
            data.append("phone", phone)
            data.append("amount", product.product_cost)

            const response = await axios.post("https://Innoh.pythonanywhere.com/api/mpesa_payment", data)
            setLoading("")
            setSuccess(response.data.message)
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    }
    return ( 
        <div>
        <div>
            <div className="row mt-3">
                    <div className="col-md-3 card shadow">                        
                            <img src={img_url + product.product_photo} alt=""  />
                    </div>
                    <div className="col-md-3 card shadow">
                            <h2>{product.product_name}</h2>
                            <b className="text-warning">{loading}</b>
                        <b className="text-danger">{error}</b>
                        <b className="text-success">{success}</b>

                        <form onSubmit={submitForm}>
                            <h3 className="text-warning">{product.product_cost}</h3>
                            <p className="text-muted">{product.product_desc}</p>
                            <input type="number" className="form-control" readOnly value={product.product_cost} required/><br /><br />
                            <input type="tel" required onChange={(e) =>setPhone(e.target.value)} className="form-control" placeholder="Enter Mpesa No 2547xxxxxxxx" /><br />
                            <button className="btn btn-primary">Pay Now</button>
                        </form>
                    </div>
            </div>
        </div>
        </div>
     );
}
 
export default SingleProduct;