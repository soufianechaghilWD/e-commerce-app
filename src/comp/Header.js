import React, { useState } from 'react'
import '../styles/header.css'
import { BiHelpCircle, BiSearchAlt2, BiCart } from "react-icons/bi"
import Logo from "../files/pics/logo.png"
import { BsList } from "react-icons/bs"
import WLogo from '../files/pics/logo_w.png'
import Data from '../files/data/Header'
import Header_sm from './Header_sm'
import Header_search from './Header_search'
import Header__item__cat from './Header__item__cat'
import { AiFillCaretDown } from "react-icons/ai"


const Header = () => {

    const [openm, setOpen] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    const addClass = (id) => {
        document.getElementById(id).classList.add('colorful')
    }

    const removeClass = (id) => {
        document.getElementById(id).classList.remove('colorful')
    }

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
                    {Object.keys(Data).map((item, idx) => 
                        <li key={idx} onMouseEnter={() => addClass(item)} onMouseLeave={() => removeClass(item)}>
                            <a href="#" id={item}>{item} {Data[`${item}`]?.hoverFunc && <AiFillCaretDown />}</a>
                            {Data[`${item}`]?.hoverFunc &&
                                <Header__item__cat  data={Data[`${item}`]}/>
                            }    
                        </li>
                    )}
                </ul>
                <div className="header__user">
                    <button>Sign In</button>
                </div>
                <div className="header__list__sm">
                    <BsList onClick={() => setOpen(true)}/>
                </div>
            </div>
            {openm && 
                <Header_sm setOpen={setOpen} WLogo={WLogo} />
            }
            {openSearch &&
                <Header_search setOpenSearch={setOpenSearch} />
            }
            
        </div>
    )
}

export default Header
