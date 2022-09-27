import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


export default function Home () {
    return (
        <div className=" h-screen flex flex-col justify-between">
            <div className=" bg-gray-900 h-full">
                <Sidebar />
            </div>
            <div className="bottom-0 inset-x-0">
                <Footer />
            </div>
        </div>
    )
}