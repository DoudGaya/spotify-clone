import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Main from "./Main";
import Topnav from "./Topnav";


export default function Home () {
    return (
        <div className=" h-screen flex flex-col bg-black justify-between ">
            {/* THE MAIN NAVIGATION */}
               <Topnav />
            {/* END OF MAIN NAV */}

            {/* SIDE BAR */}
            <div className=" bg-black flex space-x-2 h-full text-white">
                <Sidebar />

                <Main />
                        </div>
            {/* END OF SIDE BAR */}

            <div className="bottom-0 inset-x-0">
                <Footer />
            </div>
        </div>
    )
}

