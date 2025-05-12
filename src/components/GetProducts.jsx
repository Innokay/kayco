// import axios from "axios";
// import "bootstrap/dist/js/bootstrap.min.js";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const GetProducts = () => {
//     let [products, setProducts] = useState([]);
//     let [filteredProducts, setFilteredProducts] = useState([]);
//     let [error, setError] = useState("");
//     let [loading, setLoading] = useState("");
//     let [cart, setCart] = useState([]); // State to track the products in the cart
//     let [currentPage, setCurrentPage] = useState(1); // Current page state
//     const productsPerPage = 10; // Number of products per page
//     const img_url = "https://Innoh.pythonanywhere.com/static/images/";
//     const navigate = useNavigate();

//     // Fetch all products
//     const getProducts = async (category = "") => {
//         setError("");
//         setLoading("Please wait... Receiving products...");
//         try {
//             const response = await axios.get(
//                      "https://Innoh.pythonanywhere.com/api/getproducts"
//             );
//             setProducts(response.data);
//             setFilteredProducts(response.data);
//             setLoading("");
//         } catch (error) {
//             setLoading("");
//             setError("Failed to fetch products. Please try again later.");
//             console.error("Error fetching products:", error);
//         }
//     };

//     const handleSearch = (value) => {
//         filterProducts(value);
//     };

//     const filterProducts = (searchValue) => {
//         const filtered = products.filter((product) => {
//             const matchesSearch = product.product_name.toLowerCase().includes(searchValue.toLowerCase());
//             return matchesSearch; // Remove category filtering
//         });
//         setFilteredProducts(filtered);
//         setCurrentPage(1); // Reset to the first page after filtering
//     };

//     const handleAddToCart = (product) => {
//         setCart((prevCart) => {
//             const existingProduct = prevCart.find((item) => item.id === product.id);
//             if (existingProduct) {
//                 // Increment the quantity of the existing product
//                 return prevCart.map((item) =>
//                     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//                 );
//             } else {
//                 // Add the product as a new item with quantity 1
//                 return [...prevCart, { ...product, quantity: 1 }];
//             }
//         });
//     };

//     const handleViewCart = () => {
//         // Calculate the total number of items in the cart
//         const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
//         navigate("/cart", { state: { cart, totalItems } });
//     };

//     useEffect(() => {
//         getProducts();
//     }, []);

//     // Pagination logic
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//     const handleNextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePreviousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     return (
//         <div>
//             <div className="container">
//                 <b className="text-warning">{loading}</b>
//                 <b className="text-danger">{error}</b>
//                 <h1 className="text-dark">Products Available</h1>

//                 {/* Search */}
//                 <div className="row justify-content-center m-3">
//                     <div className="col-md-6">
//                         <input
//                             type="text"
//                             placeholder="Search for a product by name"
//                             className="form-control"
//                             onChange={(e) => handleSearch(e.target.value)}
//                         />
//                     </div>
//                 </div>

//                 {/* Display filtered products */}
//                 <div className="row">
//                     {currentProducts.map((product) => (
//                         <div className="col-md-3 justify-content-center mb-4" key={product.id}>
//                             <div className="card shadow">
//                                 <img src={img_url + product.product_photo} className="product_img" alt="" />
//                                 <div className="card-body">
//                                     <h5 className="mt-2">{product.product_name}</h5>
//                                     <p className="text-muted">{product.product_desc.slice(0, 20)}</p>
//                                     <b className="text-warning">{product.product_cost} Ksh</b>
//                                     <button
//                                         className="btn btn-dark w-100"
//                                         onClick={() => navigate("/singleproduct", { state: { product } })}
//                                     >
//                                         View Product
//                                     </button>
//                                     <button
//                                         className="btn btn-primary w-100 mt-2"
//                                         onClick={() => handleAddToCart(product)}
//                                     >
//                                         Add to Cart
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* View Cart Button */}
//                 <div className="d-flex justify-content-center mt-4">
//                     <button className="btn btn-success" onClick={handleViewCart}>
//                         View Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
//                     </button>
//                 </div>

//                 {/* Pagination Controls */}
//                 <div className="d-flex justify-content-between align-items-center mt-4">
//                     <button
//                         className="btn btn-primary"
//                         onClick={handlePreviousPage}
//                         disabled={currentPage === 1}
//                     >
//                         Previous
//                     </button>
//                     <span>Page {currentPage} of {totalPages}</span>
//                     <button
//                         className="btn btn-primary"
//                         onClick={handleNextPage}
//                         disabled={currentPage === totalPages}
//                     >
//                         Next
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GetProducts;

// import axios from "axios";
// import "bootstrap/dist/js/bootstrap.min.js";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


// const GetProducts = () => {
//     let [products, setProducts] = useState([]);
//     let [filteredProducts, setFilteredProducts] = useState([]);
//     let [error, setError] = useState("");
//     let [loading, setLoading] = useState("");
//     let [categories, setCategories] = useState([]);  // State to store categories
//     let [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
//     const img_url = "https://Innoh.pythonanywhere.com/static/images/";
//     const navigate = useNavigate();

//     // Fetch all products and categories
//     const getProducts = async () => {
//         setError("");
//         setLoading("Please wait... Receiving products...");
//         try {
//             const response = await axios.get("https://Innoh.pythonanywhere.com/api/getproducts");
//             setProducts(response.data);
//             setFilteredProducts(response.data);
//             setLoading("");
//         } catch (error) {
//             setLoading("");
//             setError(error.message);
//         }
//     };

//     // Fetch categories (assuming the API has an endpoint for categories)
//     const getCategories = async () => {
//         try {
//             const response = await axios.get("https://Innoh.pythonanywhere.com/api/getcategories");
//             setCategories(response.data);
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     // Handle search input
//     const handleSearch = (value) => {
//         filterProducts(value, selectedCategory);
//     };

//     // Handle category selection
//     const handleCategoryChange = (e) => {
//         const category = e.target.value;
//         setSelectedCategory(category);
//         filterProducts("", category);  // Pass empty string for search term when filtering by category
//     };

//     // Filter products based on search value and category
//     const filterProducts = (searchValue, category) => {
//         const filtered = products.filter((product) => {
//             const matchesSearch = product.product_name.toLowerCase().includes(searchValue.toLowerCase());
//             const matchesCategory = category ? product.category.toLowerCase() === category.toLowerCase() : true;
//             return matchesSearch && matchesCategory;
//         });
//         setFilteredProducts(filtered);
//     };

//     useEffect(() => {
//         getProducts();
//         getCategories();  // Fetch categories when the component mounts
//     }, []);

//     return (
//         <div className="row">
//             <b className="text-warning">{loading}</b>
//             <b className="text-danger">{error}</b>

//             {/* Content */}
//             <h1 className="text-dark">Products Available</h1>

//             {/* Search and Category Filter */}
//             <div className="justify-content-center m-3">
//                 <div className="col-md-6">
//                     <input
//                         type="text"
//                         placeholder="Search for a product by name"
//                         className="form-control"
//                         onChange={(e) => handleSearch(e.target.value)}
//                     />
//                 </div>
//                 <div className="col-md-6 mt-3">
//                     <select
//                         className="form-control"
//                         value={selectedCategory}
//                         onChange={handleCategoryChange}
//                     >
//                         <option value="">All Categories</option>
//                         {categories.map((category) => (
//                             <option key={category.id} value={category.name}>
//                                 {category.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//             {/* Display filtered products */}
//             <div className="row">
//                 {filteredProducts.map((product) => (
//                     <div className="col-md-3 justify-content-center mb-4" key={product.id}>
//                         <div className="card shadow">
//                             <img src={img_url + product.product_photo} className="product_img" alt="" />
//                             <div className="card-body">
//                                 <h5 className="mt-2">{product.product_name}</h5>
//                                 <p className="text-muted">{product.product_desc.slice(0, 20)}</p>
//                                 <b className="text-warning">{product.product_cost} Ksh</b>
//                                 <button
//                                     className="btn btn-dark w-100"
//                                     onClick={() => navigate("/singleproduct", { state: { product } })}
//                                 >
//                                     View Product
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default GetProducts;


// import axios from "axios";
// import "bootstrap/dist/js/bootstrap.min.js";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// const GetProducts = () => {
//     let [products, setProducts] = useState([]);
//     let [filteredProducts, setFilteredProducts] = useState([]);
//     let [error, setError] = useState("");
//     let [loading, setLoading] = useState("");
//     let [categories, setCategories] = useState([]); // State to store categories
//     let [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
//     let [cart, setCart] = useState([]); // State to store cart items
//     const img_url = "https://Innoh.pythonanywhere.com/static/images/";
//     const navigate = useNavigate();

//     // Fetch all products
//     const getProducts = async () => {
//         setError("");
//         setLoading("Please wait... Receiving products...");
//         try {
//             const response = await axios.get("https://Innoh.pythonanywhere.com/api/getproducts");
//             setProducts(response.data);
//             setFilteredProducts(response.data);
//             setLoading("");
//         } catch (error) {
//             setLoading("");
//             setError(error.message);
//         }
//     };

//     // Fetch categories
//     const getCategories = async () => {
//         try {
//             const response = await axios.get("https://Innoh.pythonanywhere.com/api/getcategories");
//             setCategories(response.data);
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     // Handle search input
//     const handleSearch = (value) => {
//         filterProducts(value, selectedCategory);
//     };

//     // Handle category selection
//     const handleCategoryChange = (e) => {
//         const category = e.target.value;
//         setSelectedCategory(category);
//         filterProducts("", category); // Pass empty string for search term when filtering by category
//     };

//     // Filter products based on search value and category
//     const filterProducts = (searchValue, category) => {
//         const filtered = products.filter((product) => {
//             const matchesSearch = product.product_name.toLowerCase().includes(searchValue.toLowerCase());
//             const matchesCategory = category ? product.category.toLowerCase() === category.toLowerCase() : true;
//             return matchesSearch && matchesCategory;
//         });
//         setFilteredProducts(filtered);
//     };

//     // Add product to cart
//     const handleAddToCart = (product) => {
//         setCart((prevCart) => {
//             const existingProduct = prevCart.find((item) => item.id === product.id);
//             if (existingProduct) {
//                 // Increment the quantity of the existing product
//                 return prevCart.map((item) =>
//                     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//                 );
//             } else {
//                 // Add the product as a new item with quantity 1
//                 return [...prevCart, { ...product, quantity: 1 }];
//             }
//         });
//     };

//     // View cart
//     const handleViewCart = () => {
//         navigate("/cart", { state: { cart } });
//     };

//     useEffect(() => {
//         getProducts();
//         getCategories(); // Fetch categories when the component mounts
//     }, []);

//     return (
//         <div className="row">
//             <b className="text-warning">{loading}</b>
//             <b className="text-danger">{error}</b>

//             {/* Navbar */}
//             <Navbar />

//             {/* Content */}
//             <h1 className="text-dark">Products Available</h1>

//             {/* Search and Category Filter */}
//             <div className="justify-content-center m-3">
//                 <div className="col-md-6">
//                     <input
//                         type="text"
//                         placeholder="Search for a product by name"
//                         className="form-control"
//                         onChange={(e) => handleSearch(e.target.value)}
//                     />
//                 </div>
//                 <div className="col-md-6 mt-3">
//                     <select
//                         className="form-control"
//                         value={selectedCategory}
//                         onChange={handleCategoryChange}
//                     >
//                         <option value="">All Categories</option>
//                         {categories.map((category) => (
//                             <option key={category.id} value={category.name}>
//                                 {category.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//             {/* Display filtered products */}
//             <div className="row">
//                 {filteredProducts.map((product) => (
//                     <div className="col-md-3 justify-content-center mb-4" key={product.id}>
//                         <div className="card shadow">
//                             <img src={img_url + product.product_photo} className="product_img" alt="" />
//                             <div className="card-body">
//                                 <h5 className="mt-2">{product.product_name}</h5>
//                                 <p className="text-muted">{product.product_desc.slice(0, 20)}</p>
//                                 <b className="text-warning">{product.product_cost} Ksh</b>
//                                 <button
//                                     className="btn btn-dark w-100"
//                                     onClick={() => navigate("/singleproduct", { state: { product } })}
//                                 >
//                                     View Product
//                                 </button>
//                                 <button
//                                     className="btn btn-primary w-100 mt-2"
//                                     onClick={() => handleAddToCart(product)}
//                                 >
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* View Cart Button */}
//             <div className="d-flex justify-content-center mt-4">
//                 <button className="btn btn-success" onClick={handleViewCart}>
//                     View Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default GetProducts;

import axios from "axios";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext"; // Import CartContext

const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");
    const [categories, setCategories] = useState([]); // State to store categories
    const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const productsPerPage = 10; // Number of products per page
    const img_url = "https://Innoh.pythonanywhere.com/static/images/";
    const navigate = useNavigate();

    const { cart, dispatch } = useCart(); // Access cart and dispatch from CartContext

    // Fetch all products
    const getProducts = async () => {
        setError("");
        setLoading("Please wait... Receiving products...");
        try {
            const response = await axios.get("https://Innoh.pythonanywhere.com/api/getproducts");
            setProducts(response.data);
            setFilteredProducts(response.data);
            setLoading("");
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    // Fetch categories
    const getCategories = async () => {
        try {
            const response = await axios.get("https://Innoh.pythonanywhere.com/api/getcategories");
            setCategories(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    // Handle search input
    const handleSearch = (value) => {
        filterProducts(value, selectedCategory);
    };

    // Handle category selection
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        filterProducts("", category); // Pass empty string for search term when filtering by category
    };

    // Filter products based on search value and category
    const filterProducts = (searchValue, category) => {
        const filtered = products.filter((product) => {
            const matchesSearch = product.product_name.toLowerCase().includes(searchValue.toLowerCase());
            const matchesCategory = category ? product.category.toLowerCase() === category.toLowerCase() : true;
            return matchesSearch && matchesCategory;
        });
        setFilteredProducts(filtered);
    };

    // Add product to cart
    const handleAddToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product }); // Add product to cart using CartContext
    };

    // View cart
    const handleViewCart = () => {
        navigate("/cart");
    };

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        getProducts();
        getCategories(); // Fetch categories when the component mounts
    }, []);

    return (
        <div className="container">
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            <h1 className="text-dark">Products Available</h1>

            {/* Search and Category Filter */}
            <div className="row justify-content-center m-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        placeholder="Search for a product by name"
                        className="form-control"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
                <div className="col-md-6 mt-3">
                    <select
                        className="form-control"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Display filtered products */}
            <div className="row">
                {currentProducts.map((product) => (
                    <div className="col-md-3 justify-content-center mb-4" key={product.id}>
                        <div className="card shadow">
                            <img src={img_url + product.product_photo} className="product_img" alt="" />
                            <div className="card-body">
                                <h5 className="mt-2">{product.product_name}</h5>
                                <p className="text-muted">{product.product_desc.slice(0, 20)}</p>
                                <b className="text-warning">{product.product_cost} Ksh</b>
                                <button
                                    className="btn btn-dark w-100"
                                    onClick={() => navigate("/singleproduct", { state: { product } })}
                                >
                                    View Product
                                </button>
                                <button
                                    className="btn btn-primary w-100 mt-2"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View Cart Button */}
            <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-success" onClick={handleViewCart}>
                    View Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
                </button>
            </div>

            {/* Pagination Controls */}
            <div className="d-flex justify-content-between align-items-center mt-4">
                <button
                    className="btn btn-primary"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    className="btn btn-primary"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default GetProducts;