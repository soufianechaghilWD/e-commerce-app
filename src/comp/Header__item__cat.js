import React from 'react'
import '../styles/header__cat.css'

const Header__item__cat = ({data}) => {
    var arr = []
    for(let i = 0; i < data.lisNum; i++) arr.push(i)
    return (
        <div className="header__cat">
            <h1 className="header__cat__header">{data.header}</h1>
            <div className="header__cat__content">
                <div className="header__cat__lists">
                    {
                        arr.map(ele => 
                            <div key={ele}>
                                <h2>{data['sub'+(ele+1)]}</h2>
                                {data['lis'+(ele+1)].map((ite, idx) => 
                                    <p key={idx}>{ite}</p>    
                                )}
                            </div>
                        )
                    }
                </div>
                <div className="header__cat__pic">
                    <img src={data.pic} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Header__item__cat
