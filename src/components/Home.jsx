import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


export default function Home () {
    return (
        <div className=" h-screen flex flex-col justify-between">
            <div className=" bg-purple-500 h-full">
                <Sidebar />
            </div>
            <div className="bottom-0 inset-x-0">
                <Footer />
            </div>
        </div>
    )
}