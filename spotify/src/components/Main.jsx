import React from "react";
import { useState } from "react";
import memeData from '../ramdom'
import Header from './Header'

// import play from "../../public/assets/icons/play.svg"


export default function Main () {

    const [meme, setMeme] = React.useState("")
    function generateRand () {
        let rand = Math.floor(Math.random() * memeData.length)
        let img = memeData[rand].memImage
        setMeme((s) => s = img)
    }
   
    //  the update ball YES and NO
    const [Q, setQ] = useState(true)

 
    // the things arrays section
    let thing = ['Thing 1', 'Thing 2']

    const [thingItem, setThingItem] = useState(thing);
    const thingy = thingItem.map( item => <div key={item} className=" flex text-center justify-center py-3 border-y ">{item}</div>)
    
    const addThings = () => {
        let newthing = `Thing ${thingItem.length + 1}`
        setThingItem( prevThing => [...prevThing, newthing])
        console.log(thingItem)
    }


    const [user, setUser] = useState({
        name: 'Abdulrahman',
        surname: 'Dauda',
        isStudent: true,
        age: 90
    })


    const updateStudent = () => {
        setUser( (prevU) => {
            return { ...prevU, isStudent: !prevU.isStudent}
        })
    }



    return (

        <div className=" flex-1 py-10 px-10 flex flex-col space-y-20 justify-between bg-teal-700 ">
            
            <div className=" flex justify-between ">
            <button onClick={generateRand} className="px-6 py-2 text-white bg-gray-800">Rand</button>
            <img src={meme} className=" h-12"/>
            </div>

            <div className="">
                <button onClick={() => setQ( prevQ => !prevQ)} className="bg-white px-12 rounded-full text-xl py-12">{Q ? 'Yes' : 'No'}</button>
            </div>
{/* user card section */}
        <div className="">
            <p>Name: <span>{user.name}</span></p>
            <div className="">
                <p onClick={updateStudent} >{ user.isStudent ? 'Student Badge' : 'not a student'}</p>
            </div>
        </div>
        {/* end user card section here... */}


            <div className=" border-t-2 py-2 space-y-2">
                <div onClick={addThings} className=" flex text-center justify-center py-3 bg-white rounded-md">
                    Add thing
                </div>
                {thingy}
            </div>

        </div>

        
        
    )
}