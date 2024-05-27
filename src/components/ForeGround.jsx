import React from 'react';


const ForeGround = (props) => {
    return (
        <div className={`h-[90vh] w-screen  items-center justify-center z-0 absolute ${props.isOver == false?"flex":"hidden"}`} >
            <div className="div  md:mb-[45px] md:mr-[30px] mb-[10em] ">
            <svg  className='h-[40vh] w-[40vh] md:h-[50vh] md:w-[50vh]' viewBox="0 0 447 447" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="131.5" y1="447.001" x2="131.5" y2="-3.05176e-05" stroke="white" strokeWidth="7" />
                <line x1="289.5" y1="447.001" x2="289.5" y2="-3.05176e-05" stroke="white" strokeWidth="7" />
                <line x1="447.001" y1="293.5" x2="-0.000152588" y2="293.5" stroke="white" strokeWidth="7" />
                <line x1="447.002" y1="148.5" x2="0.000823975" y2="148.5" stroke="white" strokeWidth="7" />
            </svg>
            </div>
            
        </div>
    )
}

export default ForeGround
