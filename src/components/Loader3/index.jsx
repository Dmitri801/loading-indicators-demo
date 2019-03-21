import React from "react";

const LoaderThree = ({widthPerc}) => {
    return (
     <div className="loaderThree">
        <div className="loaderThreeBar" />
        <div id="loaderThree" style={{width: `${widthPerc}%`}} className="loaderThreeFill" />
     </div>

     
    )
}

export default LoaderThree;