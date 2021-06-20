import React from 'react'
import { ImCross } from "react-icons/im"

const Header_sm = ({setOpen, WLogo}) => {
    return (
        <div className="header__sm">
            <ImCross onClick={() => setOpen(false)}/>
            <div className="header__sm__logo">
            <img src={WLogo} alt="" />
            </div>
            <div className="header__sm__items">
                <ul>
                    <li>Fashion</li>
                    <li>Electronics</li>
                    <li>Home</li>
                    <li>Sports</li>
                    <li>Others</li>
                </ul>
            </div>
            <div className="header__sm__user">
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Header_sm
