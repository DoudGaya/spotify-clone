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
                    <div className=" flex w-full items-center space-x-2 justify-center">
                        {/* music controls  */}
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300" width="20" height="20" viewBox="0 0 24 24"><path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path><path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path></svg>
                        </button>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" className=" fill-gray-400" height="30" viewBox="0 0 24 24" ><path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z"></path></svg>
                        </button>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd" />
                            </svg>
                        </button>
                
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className=" fill-gray-400" width="30" height="30" viewBox="0 0 24 24" ><path d="M7 7v10l7-5zm9 10V7h-2v10z"></path></svg>
                        </button>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300" width="20" height="20" viewBox="0 0 24 24"><path d="M21 6h-5v2h4v9H4V8h5v3l5-4-5-4v3H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"></path></svg>
                        </button>

                        {/* end of music controls  */}
                    </div>
                </div>
                <div className="">
                    <input type="range" min="0" max="100" className="w-full h-1 focus:outline-none form-range appearance-none" />
                </div>
                
            </div>
            <div className=" w-1/4 bg-purple-400">third grid</div>
        </div>
        </>
    )
}