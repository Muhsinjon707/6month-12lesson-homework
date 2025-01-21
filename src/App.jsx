import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Error from "./pages/Error"

function App() {
    return (
        <div className='max-w-screen-2xl font-sans'>
            <Routes>
                <Route index element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                } />

                <Route path="/about" element={
                    <MainLayout>
                        <About />
                    </MainLayout>
                } />

                <Route path="/products" element={
                    <MainLayout>
                        <Products />
                    </MainLayout>
                } />

                <Route path="/cart" element={
                    <MainLayout>
                        <Cart />
                    </MainLayout>
                } />

                <Route path="*" element={
                    <MainLayout>
                        <Error />
                    </MainLayout>
                } />
            </Routes>
        </div>
    )
}

export default React.memo(App);