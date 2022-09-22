import React from "react";
import Home from "./components/Home.jsx"


export default function App () {

const [dark, setDark] = React.useState(true)

let bg = dark ? 'bg-gray-800' : 'bg-gray-200'


function updateDark () {
  setDark( (prev) => {
    return prev = !prev
  })
}

  return (
    <div className={` flex w-full justify-center py-10 px-10  ${bg}`}>
      <Home theme={updateDark}/>
    </div>
  )
}