import React, {useState} from "react";
import UserMenu from "./UserMenu";

export default function Topnav() {

    const [menu, setMenu] = useState(true)

    const toggleMenu = () => {
        return setMenu( item => !item)
    }
    
    return (
        <div className=" relative mb-2 grid grid-cols-3">
        
            <div className="flex space-x-4 px-4  items-center text-white">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" className="fill-white" height="25" viewBox="0 0 24 24" ><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 stroke-slate-300 h-6">
                            <path strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 stroke-slate-300 h-6">
                            <path strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
            </div>

            <div className="  flex flex-row space-x-3 py-2">
                <a href="" className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" strokeWhite fill-white" width="24" height="24" viewBox="0 0 24 24" ><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>
                </a>
                <div className=" bg-gray-100/30 px-2 space-x-2 flex-1 rounded-full flex items-center py-1">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 stroke-white h-5">
                            <path strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
        
                        <input type="text" placeholder="Search Computer" className=" font-spotify w-full text-gray-200 placeholder:text-stone-900 flex h-full bg-transparent focus:outline-none" />
                
                </div>
            </div>
            
            <div className=" text-white  justify-end flex space-x-2">

                {/* PROFILE PICTURE */}
                <div className=" flex items-center justify-center space-x-3">
                    <button className=" px-4 py-1 bg-white font-spotify text-black rounded-full">
                        Upgrade
                    </button>
                    <button onClick={toggleMenu} className=" bg-gray-200/20 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 bg-black rounded-full px-1 h-8">
                            <path strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </button>
                </div>
                {/* END OF PROFILE */}
                <div className="">
                    <button className=" px-3 hover:bg-gray-200/30 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinejoin="round" d="M18 12H6" />
                        </svg>
                    </button>

                    <button className=" px-3 hover:bg-gray-200/30 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                        </svg>
                    </button>


                    <button className=" px-3 hover:bg-red-500 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
            
                </div>
            
            </div>

            {/* THE USER TOGGLER */}
                { menu ? <UserMenu/> : '' }
            {/* END OF USER TOGGLER */}
    </div>
    )
}