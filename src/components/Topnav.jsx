import React, {useState} from "react";
import Right from "./Headers/Right.jsx";
import SearchBar from "./Headers/SearchBar";
import UserMenu from "./UserMenu";
import ClickAwayListener from "react-click-away-listener";
import LeftNav from "./Headers/Left.jsx";


export default function Topnav() {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        return setMenu( item => !item)
    }
    const handleClickAway = () => {
        return setMenu(false)
    }
    return (
        <div className=" relative mb-2 grid grid-cols-3">
        <LeftNav />
       <SearchBar />
        <Right toggleMenu={toggleMenu}  />
            {
                menu ? 
                <ClickAwayListener onClickAway={handleClickAway}>
                <UserMenu /> 
                </ClickAwayListener>
                : '' 
            }
    </div>
    )
}