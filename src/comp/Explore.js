import React , { useState, useEffect } from 'react'
import Data from '../files/data/Explore'
import '../styles/explore.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Explore = () => {

    const [transform, setTransform] = useState(0)
    const [ind, setInd] = useState(0)

    const Next = () => {
        if(ind !== Data.length - 1){
            setTransform((ind+1)*200)
            setInd(ind+1)
        }
    }

    const Back = () => {
        if(ind !== 0){
            setTransform((ind-1)*200)
            setInd(ind-1)
        }
    }

    return (
        <div className="explore">
            <h1>Explore</h1>
            <div className="explore__params">
                <IoIosArrowBack onClick={Back} />
                <IoIosArrowForward onClick={Next} />
            </div>
            <div className="explore__content" style={{width: `${200*Data.length}px`, transform: `translateX(${-transform}px)`, transition: `transform ease-out 0.45s`}} >
                {Data?.map((item, idx) => 
                    <div key={idx} className="explore_item">
                        <div className="explore__item__pic">
                            <img src={item.pic} alt="" />
                        </div>
                        <h2>{item.title}</h2>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Explore
