import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    let [product_name, setProductName] = useState("");
    let [product_desc, setProductDesc] = useState("");
    let [product_cost, setProductCost] = useState("");
    let [product_photo, setProductPhoto] = useState("");
    // let [category_id, setCategoryId] = useState(""); // State for selected category
    // let [categories, setCategories] = useState([]); // State to store categories
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");   
    let [error, setError] = useState("");

    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    const checkUser = () => {   
        if (!user) {
            localStorage.clear();
            return navigate("/signin");
        }
    };

    useEffect(() => {
        checkUser();
        // fetchCategories(); // Fetch categories when the component loads
    }, [user]);

    // Fetch categories from the backend
    // const fetchCategories = async () => {
    //     try {
    //         const response = await axios.get("https://Innoh.pythonanywhere.com/api/categories");
    //         setCategories(response.data);
    //     } catch (error) {
    //         setError("Failed to fetch categories. Please try again later.");
    //     }
    // };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setSuccess("");
            setLoading("Please wait as we submit your Data");

            const data = new FormData();
            data.append("product_name", product_name);
            data.append("product_desc", product_desc);
            data.append("product_cost", product_cost);
            data.append("product_photo", product_photo);
            // data.append("category_id", category_id); // Include the selected category ID

            const response = await axios.post("https://Innoh.pythonanywhere.com/api/addproduct", data);

            setLoading("");
            setSuccess(response.data.Success);
            setProductCost("");
            setProductName("");
            setProductDesc("");
            // setCategoryId(""); // Reset the selected category
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    return ( 
        <div className="row justify-content-center mt-4">
            <div className="products">
                <div className="col-md-6 card shadow p-4">
                    <h2>Add Product</h2>
                    <b className="text-warning">{loading}</b>
                    <b className="text-danger">{error}</b>
                    <b className="text-success">{success}</b>
                    <form onSubmit={submitForm}>
                        <input 
                            type="text" 
                            placeholder="Enter Product Name" 
                            required 
                            className="form-control"
                            onChange={(e) => setProductName(e.target.value)}
                            value={product_name}
                        />
                        <br />

                        <textarea 
                            className="form-control" 
                            placeholder="Enter product description"
                            onChange={(e) => setProductDesc(e.target.value)}
                            value={product_desc}>
                        </textarea>
                        <br />

                        <input 
                            type="number" 
                            placeholder="Product Cost" 
                            required 
                            className="form-control"
                            onChange={(e) => setProductCost(e.target.value)}
                            value={product_cost}
                        />
                        <br />

                        {/* <label htmlFor="category" className="form-label">Select Category</label>
                        <select
                            id="category"
                            className="form-control"
                            value={category_id}
                            onChange={(e) => setCategoryId(e.target.value)}
                            required
                        >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.category_name}
                                </option>
                            ))}
                        </select>
                        <br /> */}

                        <label htmlFor="productPhoto" className="form-label">Product Photo</label>
                        <input 
                            type="file"  
                            required 
                            className="form-control"
                            onChange={(e) => setProductPhoto(e.target.files[0])}
                        />
                        <br />

                        <button className="btn btn-primary">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;