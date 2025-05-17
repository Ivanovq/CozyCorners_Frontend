import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import AccommodationsPage from "./ui/pages/AccommodationsPage/AccommodationsPage.jsx";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import HostsPage from "./ui/pages/HostsPage/HostsPage.jsx";
import CountryPage from "./ui/pages/CountryPage/CountryPage.jsx";
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="accommodations" element={<AccommodationsPage/>}/>
                <Route path="hosts" element={<HostsPage/>}/>
                <Route path="countries" element={<CountryPage/>}/>

            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
