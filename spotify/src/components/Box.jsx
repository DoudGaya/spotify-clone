import React, {useState} from "react";

export default function Box (props) {
    console.log(props.box)
    return (
        <>
        <div className="bg-green-700 lg:m-4 h-100 lg:h-[180px] rounded-lg px-4 py-6 ">
            H - {props.box.val}
        </div>
        </>
    )
}