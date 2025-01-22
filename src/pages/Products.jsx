import React, { useState, useEffect } from 'react'
import { backendAPI } from '../axios';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

    const [product, setProduct] = useState("");
    const [category, setCategory] = useState("all");
    const [company, setCompany] = useState("all");
    const [order, setOrder] = useState("a-z");
    const [price, setPrice] = useState(100000);
    const [shipping, setShipping] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [pageSize, setPageSize] = useState(1);

    function getData(url) {
        backendAPI.get(url)
            .then(response => {
                if (response.status == 200) {
                    if (response?.data?.data) {
                        setProducts(response.data.data);
                        console.log(response.data);
                        setPageSize(response?.data?.meta?.pagination.pageCount)
                    }
                }
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }

    const location = useLocation()
    useEffect(() => {
        setLoading(true);
        if (location.search) {
            getData(`/products${location.search}`);
            setProduct(searchParams.get("search"));
            setCategory(searchParams.get("category"));
            setCompany(searchParams.get('company'));
            setOrder(searchParams.get('order'));
            setPrice(searchParams.get("price"));
            setShipping(searchParams.get("shipping"));
        } else {
            getData("/products")
        }
    }, [])

    const handleFilter = (e) => {
        e.preventDefault();

        let strFilter = `search=${product}&category=${category}&company=${company}&order=${order}&price=${price}&shipping=${shipping && "on"}`
        setLoading(true);
        getData(`/products?${strFilter}`);
        setSearchParams({ search: product, category, company, order, price, shipping: shipping ? "on" : "" })
    }

    const handleReset = (e) => {
        e.preventDefault();
        setProduct("");
        setCategory("all");
        setCompany("all");
        setOrder("a-z");
        setPrice(1000);
        setShipping(false);
    }

    const navigate = useNavigate()
    const redirectDetails = (product) => {
        navigate(`/products/${product.id}`, { state: product })
    }

    function Pagination(pageSize) {

    }

    return (
        <div className='container mx-auto w-full flex flex-col gap-20 items-center justify-between p-6 my-16'>
            <div className='w-full bg-[#f0f6ff] flex justify-between flex-wrap p-5 gap-6'>
                <div className='w-[23%] flex flex-col items-start gap-3 justify-center mb-10'>
                    <label htmlFor="search">Search Product</label>
                    <input value={product} placeholder='Type here' onChange={(e) => setProduct(e.target.value)} className="w-full bg-white p-2 outline-none focus:outline-black rounded-md" type="text" id="search" />
                </div>
                <div className='w-[23%] flex flex-col items-start gap-3 justify-center mb-10'>
                    <label htmlFor="category">Select Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-white p-2 outline-none focus:outline-black rounded-md" id="category">
                        <option value="all">all</option>
                        <option value="Tables">Tables</option>
                        <option value="Chairs">Chairs</option>
                        <option value="Kids">Kids</option>
                        <option value="Sofas">Sofas</option>
                        <option value="Beds">Beds</option>
                    </select>
                </div>
                <div className='w-[23%] flex flex-col items-start gap-3 justify-center mb-10'>
                    <label htmlFor="company">Select Company</label>
                    <select value={company} onChange={(e) => setCompany(e.target.value)} className="w-full bg-white p-2 outline-none focus:outline-black rounded-md" id="company">
                        <option value="all">all</option>
                        <option value="Modenza">Modenza</option>
                        <option value="Luxora">Luxora</option>
                        <option value="Artifex">Artifex</option>
                        <option value="Comfora">Comfora</option>
                        <option value="Homestead">Homestead</option>
                    </select>
                </div>
                <div className='w-[23%] flex flex-col items-start gap-3 justify-center mb-10'>
                    <label htmlFor="order">Sort By</label>
                    <select value={order} onChange={(e) => setOrder(e.target.value)} className="w-full bg-white p-2 outline-none focus:outline-black rounded-md" id="order">
                        <option value="a-z">a-z</option>
                        <option value="z-a">z-a</option>
                        <option value="high">high</option>
                        <option value="low">low</option>
                    </select>
                </div>
                <div className='w-[23%] flex flex-col items-center justify-center gap-4'>
                    <div className='w-full flex justify-between item-center'>
                        <label htmlFor="price">Select price</label>
                        <span>${price}</span>
                    </div>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} type="range" min={0} max={10000} className="w-full range range-info w-full bg-white p-2 rounded-md" id="price" />
                    <div className='w-full flex justify-between item-center'>
                        <span>0</span>
                        <b>Max: <span>$1,000,00</span></b>
                    </div>
                </div>
                <div className='w-[23%] flex flex-col items-center justify-center'>
                    <label htmlFor="shipping" className="label cursor-pointer flex flex-col gap-4">
                        <span className="label-text">Free Shipping</span>
                        <input checked={shipping} onChange={() => setShipping(!shipping)} id="shipping" type="checkbox" className="checkbox checkbox-primary" />
                    </label>
                </div>
                <div className="w-[23%] flex items-center justify-center">
                    <button onClick={handleFilter} className="outline-none border-0 w-full py-2 uppercase text-white rounded-lg bg-blue-500 btn btn-active btn-primary">search</button>
                </div>
                <div className="w-[23%] flex items-center justify-center">
                    <button onClick={handleReset} className="outline-none border-0 w-full py-2 uppercase text-white rounded-lg bg-purple-500 btn btn-active btn-secondary">reset</button>
                </div>
            </div>
            <div className='w-full flex flex-col items-start justify-cnter gap-5'>
                <h4>22 Products</h4>
                <hr className='w-full bg-slate-300' />
            </div>

            {/* Products */}
            <div className='w-full mt-22 flex flex-wrap items-center justify-start content-center gap-5'>
                {loading && <p>Loading...</p>}
                {
                    products.length > 0 && products.map((product, index) => {
                        return (
                            <div onClick={() => redirectDetails(product)} key={index} className='cursor-pointer rounded-lg shadow-md shadow-slate-300 transition-shadow duration-300 ease-linear hover:shadow-slate-400 w-[32%] flex flex-col items-center justify-center p-5 gap-10'>
                                <img className='rounded-lg w-full h-[250px] object-cover' src={product.attributes.image} alt="Avant-Garde Lamp" />
                                <div className='flex flex-col items-center justify-center gap-4'>
                                    <h3 className='text-[#1d2837] font-bold text-xl'>{product.attributes.title}</h3>
                                    <span className='text-[#463aa1]'>${product.attributes.price}</span>
                                </div>
                            </div>
                        );
                    })
                }
                {
                    products.length === 0 && <p>Sorry, no products matched your search...</p>
                }
            </div>

            {/* Pagination */}
            {
                products.length > 0 && (
                    <div className='w-full flex items-center justify-end'>
                        <div className="join">
                            <input
                                className="join-item btn btn-square"
                                type="radio"
                                name="options"
                                aria-label="1"
                                defaultChecked />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Products