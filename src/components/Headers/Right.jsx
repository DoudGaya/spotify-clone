

const Right = ( { toggleMenu,}) => {
    return (
        <>
          <div className=" text-white  justify-end flex space-x-2">

{/* PROFILE PICTURE */}
<div className=" flex items-center justify-center space-x-3">
    <button className=" px-4 py-1 bg-white font-spotify text-black rounded-full">
        Upgrade
    </button>
    <button onClick={toggleMenu}  className=" bg-gray-200/20 p-2 rounded-full">
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
        </>
    )
}


export default Right;