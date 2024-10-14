import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'

function SharedLayout() {
  return (
    <>
    <Navbar/>
    <Outlet />
    </>
  )
}

export default SharedLayout