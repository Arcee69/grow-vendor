import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Auth/Login'
import BoardLayout from '../layouts/BoardLayout'
import Dashboard from '../pages/Dashboard'
import User from '../pages/User'
import Product from '../pages/Product'
import Orders from '../pages/Orders'
import Transaction from '../pages/Transactions'
import Settings from '../pages/Settings'



const Routers = () => {
  return (
    <Routes>
        <Route element={<AuthLayout />}>
            <Route path='/' element={<Login />} />
        </Route>
        <Route element={<BoardLayout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/user-management' element={<User />} />
            <Route path='/product-management' element={<Product />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/transaction' element={<Transaction />} />
            <Route path='/settings' element={<Settings />} />
        </Route>
    
    </Routes>
  )
}

export default Routers