import React from "react"

const LoaderOne = ({widthPerc}) => {
    return (
        <div className="loaderOneContainer">
 <div className="loaderOne" />
        <div className="progress">
        <div className="progressBar" />
        <div style={{width: `${widthPerc}%`}} className="progressBarFill" />
        </div>
      
        </div>
       
        
              
    )
}

export default LoaderOne;