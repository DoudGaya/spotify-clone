import React from "react";

export default function Header (props) {
    return (
        <div className="bg-yellow-200 flex flex-col px-4 py-6 w-[200px]">
            {props.logo}
        </div>
    )
}