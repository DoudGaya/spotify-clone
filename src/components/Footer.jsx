import React from "react";


export default function Footer () {
    return (
        <>
        <div className=" w-full bg-gray-900 border-t border-gray-700 flex py-6 px-4">
            <div className=" w-1/4 flex space-x-8 pr-10 ">
                <div className="flex flex-col">
                    <a href="#" className=" text-sm font-thin hover:underline tracking-wide font-spotify text-white">Maclemore | Night Away ( Dance )</a>
                    <small>
                        <ul className=" flex text-gray-300 space-x-1 text-xs">
                            <li> <a href="#" className=" hover:underline text-xs"> Lil Wayne </a></li>,
                            <li> <a href="#" className=" hover:underline text-xs"> Macklemore </a></li>,
                            <li> <a href="#" className=" hover:underline text-xs"> Chris Brown </a></li>
                        </ul>
                    </small>
                </div>
                <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 stroke-white h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>

                </div>
            </div>
            <div className=" w-1/2 flex text-white px-6 flex-col">
                <div className="flex w-[280px] mx-auto ">
                    <div className=" flex j  w-full items-center justify-center">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" className=" stroke-white fill-white" height="30" viewBox="0 0 24 24" ><path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z"></path></svg>
                        </button>
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" >
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z" clip-rule="evenodd" />
                        </svg>

                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className=" stroke-white fill-white" width="30" height="30" viewBox="0 0 24 24" ><path d="M7 7v10l7-5zm9 10V7h-2v10z"></path></svg>
                        </button>
                    </div>
                </div>
                
            </div>
            <div className=" w-1/4 bg-purple-400">third grid</div>
        </div>
        </>
    )
}