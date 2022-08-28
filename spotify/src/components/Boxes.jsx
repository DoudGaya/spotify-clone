import React, {useState} from "react";
import boxes from '../box.js';
import Box from "./Box.jsx";

export default function Boxes() {

    const [boxo, setboxo] = useState(boxes)
    const box = boxo.map( item => <Box box={item} key={item.id}></Box>)
    
    return (
        <>
           <div className=" w-full gap-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 ">
                {box}
           </div>
        </>
    )
} 