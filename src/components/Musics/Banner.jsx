import {React, useState} from "react"

export default function Banner(props) {

    const icon = (<svg xmlns="http://www.w3.org/2000/svg" className="fill-white " width="40" height="40" viewBox="0 0 24 24"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg> )    
      const [bannerQ, setBannerQ] = useState('purple')
    const updateBanner = () => {
      return props.func(props.song.colorBlend)
    }
    return (
            <>
                <div onMouseOver={updateBanner} className="flex items-center group space-x-5 bg-[#525252]/70 backdrop-blur-md relative rounded-lg">
                    <div className=" h-20 w-20 flex items-center justify-center bg-gradient-to-br from bg-indigo-800 via-stone-500/70 to-stone-500/70 rounded-l-lg">
                        <img src={props.song.banner} alt="" className=" rounded-l-lg" srcset="" />
                    </div>
                    <p className=" font-spotify text-lg font-semibold">{props.song.name}</p>
                    <button className=" bg-[#00eb62] rounded-full opacity-0 group-hover:opacity-100 transition-all flex justify-center shadow-2xl items-center p-2 drop-shadow-2xl absolute right-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M7 6v12l10-6z"></path></svg>
                    </button>
                </div>
            </>
    )
}