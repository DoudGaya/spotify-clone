import React from "react"



export default function UserMenu() {
    return (
        <>
             <div className=" absolute transition-all ease-in-out delay-75  right-32 top-16 p-2 bg-stone-900 z-10 shadow-lg rounded-md border-b border-stone-600/20 w-[200px] text-white">
                <ul>
                    <li className=" flex ">
                        <a href="#" className=" font-spotify flex items-center py-3 px-2 justify-between hover:bg-gray-300/20 rounded-sm  w-full ">
                           <p className=" text-sm">Account</p>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>
                    </li>

                    <li className=" flex ">
                        <a href="#" className=" font-spotify flex items-center py-3 px-2 justify-between hover:bg-gray-300/20 rounded-sm  w-full ">
                           <p className=" text-sm">Profile</p>
                        </a>
                    </li>

                    <li className=" flex ">
                        <a href="#" className=" font-spotify flex items-center py-3 px-2 justify-between hover:bg-gray-300/20 rounded-sm  w-full ">
                           <p className=" text-sm">Upgrade to premium</p>

                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>

                        </a>
                    </li>

                    <li className=" flex ">
                        <a href="#" className=" font-spotify flex items-center py-3 px-2 justify-between hover:bg-gray-300/20 rounded-sm  w-full ">
                           <p className=" text-sm">Private session</p>
                        </a>
                    </li>

                    <li className=" flex ">
                        <a href="#" className=" font-spotify flex items-center py-3 px-2 justify-between hover:bg-gray-300/20 rounded-sm  w-full ">
                           <p className=" text-sm">Settings</p>
                        </a>
                    </li>

                    <li className=" flex border-t border-stone-600 ">
                        <a href="#" className=" font-spotify flex items-center py-3 px-2 justify-between hover:bg-gray-300/20 rounded-sm  w-full ">
                           <p className=" text-sm">Logout</p>   
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}