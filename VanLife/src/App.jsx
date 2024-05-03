import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import "../css/index.css"
import "../css/header.css"
import VanDetail from "./pages/Vans/VanDetail"
import Login from "./pages/Login"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanDetailInfo from "./pages/Host/HostVanDetailInfo"
import HostVanDetailPricing from "./pages/Host/HostVanDetailPricing"
import HostVanDetailPhotos from "./pages/Host/HostVanDetailPhotos"
import NotFound from "./pages/NotFound"
import AuthRequired from "./pages/AuthRequired"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} />
        <Route path='vans/:id' element={<VanDetail />} />
        <Route path='login' element={<Login />} />

        <Route element={<AuthRequired />}>
          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />} >
              <Route index element={<HostVanDetailInfo />} />
              <Route path='pricing' element={<HostVanDetailPricing />} />
              <Route path='photos' element={<HostVanDetailPhotos />} />
            </Route>
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>


        <Route path='*' element={<NotFound />} />
       </Route>
      </Routes>
   </BrowserRouter>
  )
}

