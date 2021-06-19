import React, { useState, useEffect } from 'react'
import '../styles/header.css'
import { BiHelpCircle, BiSearchAlt2, BiCart } from "react-icons/bi"
import Logo from "../files/pics/logo.png"
import { BsList } from "react-icons/bs"
import WLogo from '../files/pics/logo_w.png'
import { ImCross } from "react-icons/im"
import { AiFillCaretDown } from 'react-icons/ai'
import Data from '../files/data/Header'



const Header = () => {

    const [active, setActive] = useState(null)
    const [openm, setOpen] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    const handleClick = (event) => {
        setActive(event.target.innerHTML)
    };



    return (
        <div className="header">
            <div className="header__part1">
                <div className="header__part1__1">
                    <p>Help</p>
                    <BiHelpCircle />
                </div>
                <div className="header__part1__2">   
                    <BiSearchAlt2 onClick={() => setOpenSearch(true)} />
                    <BiCart />
                </div>
            </div>
            <div className="header__part2">
                <div className="header__logo">
                    <img src={Logo} alt="" />
                </div>
                <ul>
                    <li onClick={handleClick}><p>Fashion</p> <AiFillCaretDown /></li>
                    <li onClick={handleClick}><p>Electronics</p> <AiFillCaretDown /></li>
                    <li onClick={handleClick}><p>Homes</p> <AiFillCaretDown /></li>
                    <li onClick={handleClick}><p>Sports</p> <AiFillCaretDown /></li>
                    <li>Others</li>
                </ul>
                <div className="header__user">
                    <button>Sign In</button>
                </div>
                <div className="header__list__sm">
                    <BsList onClick={() => setOpen(true)}/>
                </div>
            </div>
            {openm && 
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
            }
            {openSearch &&
                <div className="header__search">
                    <ImCross onClick={() => setOpenSearch(false)}/>
                    <form>
                        <input  placeholder="Search for a product or a brand" type="text" />
                        <button>Search</button>
                    </form>
                </div>
            }
            
        </div>
    )
}

export default Header
