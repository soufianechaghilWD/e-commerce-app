import React , { useState, useEffect } from 'react'
import Data from '../files/data/Explore'
import '../styles/explore.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

const Explore = ({title}) => {

    const [ind, setInd] = useState(0)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [showParams, setShwonParams] = useState((Data.length * 200 + 32*Data.length) > (windowDimensions.width > 1650 ? 1650 : windowDimensions.width))
    const [transform, setTransform] = useState(0)
    const [sm, setSm] = useState(false)

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    useEffect(() => {
        if(windowDimensions.width <= 760){
            setSm(true)
        }
    })

    const Next = () => {
        if(ind !== Data.length - 1 && transform  <= (((200*Data.length)+(32*Data.length)) - (windowDimensions.width > 1650 ? 1650 : windowDimensions.width))){
            setTransform(transform+200)
            setInd(ind+1)
        }
    }

    const Back = () => {
        if(ind !== 0){
            setTransform(transform-200)
            setInd(ind-1)
        }
    }


    return (
        <div className="explore">
            <h1>{title}</h1>
            {showParams && 
                <div className="explore__params">
                    <IoIosArrowBack onClick={Back} />
                    <IoIosArrowForward onClick={Next} />
                </div>
            }
            { sm === false ?
                <div className="explore__content" style={{width: `${(200*Data.length)+(32*Data.length)}px`, transform: `translateX(${-transform}px)`, transition: `transform ease-out 0.45s`}} >
                {Data?.map((item, idx) => 
                    <div key={idx} className="explore_item">
                        <div className="explore__item__pic">
                            <img src={item.pic} alt="" />
                        </div>
                        <h2>{item.title}</h2>
                    </div>
                )}
                </div>
                :
                <div className="explore__content__sm">
                    {Data?.slice(0, 6)?.map((item, idx) => 
                    <div key={idx}>
                        <div>
                            <img src={item.pic} alt="" />
                        </div>
                        <h2>{item.title}</h2>
                    </div>
                    )}
                </div>
            }
        </div>
    )
}

export default Explore
