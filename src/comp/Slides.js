import React , { useState, useEffect } from 'react'
import Data from '../files/data/Slides'
import '../styles/slides.css'
import { AiOutlineArrowRight } from "react-icons/ai"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}


const Slides = () => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [transform, setTransform] = useState(0)
    const [ind, setInd] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if(windowDimensions.width > 1650) setWidth(1650)
        else setWidth(windowDimensions.width)
    }, [windowDimensions.width])

    useEffect(() => {
        if(windowDimensions.width < 880){
            setTransform(0)
        }
    }, [windowDimensions.width])

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Next = () => {
        if(ind !== Data.length - 1){
            setTransform((ind+1)*width)
            setInd(ind+1)
        }
    }

    const Back = () => {
        if(ind !== 0){
            setTransform((ind-1)*width)
            setInd(ind-1)
        }
    }


    return (
        <div className="slides">
            <div className="slide__params">
                <IoIosArrowBack onClick={Back} />
                <IoIosArrowForward onClick={Next}/>
            </div>
            <div className="slide__content" id="content" style={{maxWidth: `${Data.length * 1650}px`, width: `${width * Data.length}px`, transform: `translateX(${-transform}px)`, transition: `transform ease-out 0.45s`}}>
                {Data?.map((ele, idx) => 
                    <div key={idx} className="slide__slide" style={{background: `${ele.background}`, width: `${width}px`}}>
                        <div className="slide__text">
                            <h1>{ele.title}</h1>
                            <div>
                                <button>{ele.button} <AiOutlineArrowRight /> </button>
                            </div>
                            <p>{ele.bottom}</p>
                        </div>
                        <div className="slide__pic">
                            <img src={ele.pic} alt="" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Slides
