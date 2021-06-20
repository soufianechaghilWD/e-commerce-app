import React from 'react'
import { ImCross } from "react-icons/im"

const Header_search = ({setOpenSearch}) => {
    return (
        <div className="header__search">
            <ImCross onClick={() => setOpenSearch(false)}/>
            <form>
                <input  placeholder="Search for a product or a brand" type="text" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Header_search
