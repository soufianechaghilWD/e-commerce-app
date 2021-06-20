import React from 'react'

const Header__item__cat = ({data}) => {
    return (
        <div className="header__cat">
            <h1>{data.header}</h1>
            {data?.lis1.map((it, id) => 
                <p href="#" key={id}>{it}</p>
            )}
        </div>
    )
}

export default Header__item__cat
