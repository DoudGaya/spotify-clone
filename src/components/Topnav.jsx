import React from "react";


export default function Topnav() {
    return (
        <div className=" bg-black mb-2 py-2 px-4 grid grid-cols-3">
        <div className="flex space-x-4 px-4 text-white">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" className="fill-white" height="25" viewBox="0 0 24 24" ><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 stroke-slate-300 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 stroke-slate-300 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
        </div>
        <div className="  flex flex-row space-x-3">
            <a href="" className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100/20">
                <svg xmlns="http://www.w3.org/2000/svg" className=" stroke-white fill-white" width="24" height="24" viewBox="0 0 24 24" ><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>
            </a>
            <div className=" bg-gray-100/30 px-2 space-x-2 flex-1 rounded-full flex items-center py-1">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 stroke-white h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
       
                    <input type="text" placeholder="Search Computer" className=" font-spotify w-full text-gray-200 placeholder:text-stone-900 flex h-full bg-transparent focus:outline-none" />
              
            </div>
        </div>
        <div className=" text-white">
            s
        </div>
    </div>
    )
}