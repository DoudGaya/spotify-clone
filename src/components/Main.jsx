// IMPORTS 
import {React, useState} from "react"
import banners from "../music/banners"
import Banner from "./Musics/Banner"

export default function Main() {


    // STATES DECLARATIONS     
    const [banner, setBanner] = useState(banners)
    const [music, setMusic] = useState(banners)
    const [bannerBG, setBannerBG] = useState('')

   
    // FUNCTIONS 
    function bannerV(p) {
       setBannerBG( prev => {

        return prev = p
        
       })

    }

    const song = banner.map( item => {
        return (<Banner key={item.id} func={bannerV} song={item}/>)
    })
        const single = music.map( (sing) => {
            
            return (
                <>
                <div className="flex flex-col backdrop-blur-md bg-stone-700/30">
                    <div className=" flex w-full p-4 ralative">
                        <img src={sing.banner} alt="" className="drop-shadow-xl border-b-4 rounded-md srcset=" />
                        <div className="absolute bottom-10 px-2 border-l-4">
                            <p className=" font-spotify">2010 Mix</p>
                        </div>
                    </div>
                </div>
                </>
            )
        })

        
    return (
        <div className=" bg-stone-900 flex-1 rounded-lg flex flex-col">
                <div className={`p-6 rounded-t-lg bg-gradient-to-b transition-all ease-linear delay-100 duration-150 from-${bannerBG}-700/50 via-${bannerBG}-900/50 to-stone-900/50 flex flex-col`}>
                    <p className=" font-spotify font-bold text-2xl">Good Evening</p>
                    <div className=" grid gap-4 grid-cols-3 py-2">
                        {song}
                    </div>

                    <div className=" flex flex-col">
                        <p className=" font-spotify font-bold text-2xl">Your Top Mixed</p>
                        <div className=" grid grid-cols-6 gap-4">
                            {single}
                        </div>
                    </div>
                </div>
        </div>
    )
}