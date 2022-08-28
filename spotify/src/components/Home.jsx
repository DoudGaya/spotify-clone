import React from "react";
import Header from "./Header";
import Main from "./Main"
import Boxes from "./Boxes";

export default function Home() {

    const [logo, setLogo] = React.useState('Chemcider')
    return (
        <div className=" flex px-10 py-20 bg-gray-900">
            <Boxes></Boxes>
        </div>
    )
}