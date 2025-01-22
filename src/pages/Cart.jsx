import React, { useEffect, useState } from 'react'

function Cart() {
    const [storedProducts, setStored] = useState([])

    useEffect(() => {
        let copied = [JSON.parse(localStorage.getItem("products"))]
        console.log("localStorage: ", copied[0]);

        setStored(copied[0]);
    }, [])

    return (
        <div className='w-full'>
            {
                storedProducts.length > 0 && storedProducts.map((product, index) => {
                    return (
                        <div key={index} className='flex items-center justify-between'>
                            <img src={product.image} alt={product.title} />
                            <div className='flex flex-col items-start justify-center gap-2'>
                                <h3>{product.title}</h3>
                                <h3>{product.company}</h3>
                                <h4>Color: {product.color}</h4>
                            </div>
                            <div className='flex flex-col items-start justify-center gap-2'>
                                <span>Amount</span>
                                <select>
                                    {Array.from({ length: 6 }, (_, i) => i).filter(i => i > 0).map(i => (
                                        <option key={i} value={i}>
                                            {i}
                                        </option>
                                    ))}
                                </select>
                                <button>remove</button>
                            </div>
                            <div>
                                {product.price}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart