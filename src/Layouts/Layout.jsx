import React from "react";
import Footer from "./footer";
import Header from "./Header";
import { Outlet } from 'react-router-dom'
export default function (){
    return (
        <div className="layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}