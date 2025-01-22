import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { backendAPI } from '../axios';
import { ToastContainer, toast } from 'react-toastify';

function ProductDetails() {
    const [newProduct, setNewProduct] = useState({})
    const params = useParams();

    useEffect(() => {
        backendAPI.get(`/products/${params.id}`)
            .then(response => {
                setNewProduct(response?.data?.data?.attributes);
                // console.log("Product detail: ", response?.data?.data?.attributes);
            })
            .catch(error => console.log(error));
    }, []);

    function getLocalData() {
        let data = []

        if (localStorage.getItem("products")) {
            data = JSON.parse(localStorage.getItem("products"));
        }

        return data;
    }

    const notify = () => {
        toast("Item added to cart");
        
        let data = getLocalData();
        data.push(newProduct);
        localStorage.setItem("products", JSON.stringify(data));
    }

    return (
        <div className='container w-full flex flex-col gap-20 p-6 my-16'>
            <h2 className='flex items-center justify-center gap-2'>
                <Link className='hover:underline' to="/">Home</Link>
                /
                <Link className='hover:underline' to="/products">Products</Link>
            </h2>

            <div className='w-full flex items-start justify-between gap-20'>
                <img src={newProduct.image} alt={newProduct.title} className='w-1/2 h-[450px]' />
                <div className='w-1/2 h-full flex flex-col items-start justify-between gap-3'>
                    <h3 className='capitalize text-[#394e6a] text-3xl font-bold'>{newProduct.title}</h3>
                    <h4 className='text-gray-300 font-bold  text-xl'>{newProduct.company}</h4>
                    <h4 className='mb-3 text-lg text-[#394e7d]'>${newProduct.price}</h4>
                    <h4 className='leading-loose w-5/6'>{newProduct.description}</h4>
                    <div className='flex flex-col items-start justify-center gap-4'>
                        <span>Colors</span>
                        <div className="flex gap-3">
                            {newProduct.colors && newProduct.colors.length > 0 ? (
                                newProduct.colors.map((color, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            backgroundColor: color,
                                            width: 30,
                                            height: 30,
                                            display: 'inline-block',
                                            border: "1px solid blue",
                                            borderRadius: 50
                                        }}
                                    ></span>
                                ))
                            ) : (
                                <span>No colors available</span>
                            )}
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start gap-10">
                        <div className='w-full flex flex-col items-tart gap-4'>
                            <h4>Amount</h4>
                            <select className="w-1/2 border-2 border-slate-800 p-3 rounded-lg">
                                {Array.from({ length: 21 }, (_, i) => i).filter(i => i > 0).map(i => (
                                    <option key={i} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button onClick={notify} className='bg-[#3b3187] p-4 text-white uppercase rounded-lg'>add to bag</button>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails