import React from 'react'
import {Routes,Route} from "react-router-dom"
import { AddUser } from './AddUser'
import { EditUser } from './EditUser'
import GetUser from './GetUser'
import { NavbarBasic } from './Navbar'

export const AllRoutes = () => {
  return (
    <div>
        <NavbarBasic/>
    <Routes>
        <Route path="/" element={<GetUser/>}></Route>
        <Route path="/adduser" element={<AddUser/>}></Route>
        <Route path="/edit/:id" element={<EditUser/>}></Route>
    </Routes>
    </div>
  )
}
