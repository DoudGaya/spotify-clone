import React from "react";
import windows from '../assets/windows.jpg'

export default function Sidebar() {
    return (
        <div className=" w-[230px] text-white border-r border-gray-900 rounded-lg flex flex-col justify-between h-full bg-stone-900">
               <div className="">
                
                 {/* The main navigations */}
                 <div className="flex px-4  h-12 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" className="fill-white" height="25" viewBox="0 0 24 24" ><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                    </div>
                    <div className="flex px-4 flex-col ">

                        <div className="space-y-8">
                            <ul className=" w-full space-y-4 ">
                                <li>
                                    <a className="flex space-x-3 items-center text-center align-middle" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 hover:fill-white text-gray-300 hover:text-white delay-100 transition-all duration-150" width="24" height="24" viewBox="0 0 24 24" ><path d="M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z"></path></svg>
                                        <span className="font-spotify text-gray-300 hover:text-white delay-100 transition-all duration-150">Home</span>
                                    </a>
                                </li>

                                <li>
                                    <a className="flex space-x-3 items-center text-center align-middle" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 hover:fill-white text-gray-300 hover:text-white delay-100 transition-all duration-150" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                                        <p className="font-spotify text-gray-300 hover:text-white delay-100 transition-all duration-150 ">Search</p>
                                    </a>
                                </li>

                                <li>
                                    <a className="flex space-x-3 items-center text-center align-middle" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 hover:fill-white text-gray-300 hover:text-white delay-100 transition-all duration-150" width="24" height="24" viewBox="0 0 24 24"><path d="M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.062 17.792-6.223-16.89 1.877-.692 6.223 16.89z"></path></svg>
                                        <p className="font-spotify text-gray-300 hover:text-white delay-100 transition-all duration-150 ">Your Library</p>
                                    </a>
                                </li>
                            
                            </ul>
                            <ul className=" w-full  space-y-4 ">
                                <li>
                                    <a className=" fill-gray-400 group hover:fill-white text-gray-300 hover:text-white delay-100 transition-all duration-150 flex space-x-3" href="#">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" className=" fill-black group-hover:bg-white rounded-sm bg-gray-300 p-1 delay-100 transition-all duration-150" width="24" height="24" viewBox="0 0 24 24" ><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                                        </div>
                                        <span className="font-spotify text-gray-300 group-hover:text-white delay-100 transition-all duration-150">Liked Songs</span>
                                    </a>
                                </li>

                                <li>
                                    <a className="flex space-x-3 group items-center text-center align-middle" href="#">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-white delay-100 transition-all duration-150 opacity-80 group-hover:opacity-100 rounded-sm bg-gradient-to-br from-purple-600 via-purple-500 to-purple-100 p-1" width="24" height="24" viewBox="0 0 24 24"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
                                        </div>
                                        <span className="font-spotify text-gray-300 group-hover:text-white delay-100 transition-all duration-150">Liked Songs</span>
                                    </a>
                                </li>
                                
                            

                            </ul>
                        </div>

                        <hr className=" my-4 border-gray-500 border-1" />

                        <div className=" flex flex-col space-y-2">
                            <p className=" text-sm">The First Song here...</p>
                            <p className=" text-sm">My Playlist #2</p>
                        </div>
                    </div>
                {/* End of the main navigations */}
               </div>
               <div className=" h-[230px] bg-purple-100">
                <img src={windows} className=" object-cover w-full h-full" alt="" />
               </div>
        </div>
    )
}