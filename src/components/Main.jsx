// IMPORTS 
import {React, useState, useEffect} from "react"
import banners from "../music/banners"
import Banner from "./Musics/Banner"
import songs from "../songs"
import Song from "./Main/Song"
import axios from 'axios';






export default function Main() {
const [bannerBG, setBannerBG] = useState('')

const bannerV = (some) => {
    setBannerBG(some.colorBlend)
    console.log(bannerBG)
}




// COMPONENTS MAPPING
const song = banners.map( item => <Banner key={item.id} func={bannerV} song={item}/>)
const single = songs.map((sing) => <Song key={sing.id} sing={sing} /> )


return (
    <div className="bg-stone-900 flex-1 rounded-lg flex flex-col">
        <div  className={` ${bannerBG} p-6 rounded-t-lg bg-gradient-to-b transition-all ease-linear delay-100 duration-150 to-stone-900/50 flex flex-col`}>
          <p className="font-spotify font-bold text-2xl">Good Evening</p>
          <div className="grid gap-4 grid-cols-3 py-2">
             {/* <div className=""> */}
                {song}
             {/* </div> */}
          </div>

          <div className="flex flex-col ">
              <p className=" font-spotify font-bold text-2xl">Your Top Mixed</p>
              <div className=" grid grid-cols-6 gap-4">
                  {single}
              </div>
          </div>
        </div>
    </div>
)
}