import React from "react"

const SpinnerOne = ({countDown, seconds, intervalCountdown}) => {
 
    return (
        <div className="spinnerOne">
        <span style={{color: "rgb(0, 183, 255)", fontSize: "25px"}}>
        {`${seconds}%`}
        </span>
        </div>
            
       
    )
}

export default SpinnerOne;