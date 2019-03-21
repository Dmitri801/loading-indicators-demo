import React from "react"

const SpinnerThree = (props) => {
    return (  
        <div>
            <style dangerouslySetInnerHTML={{
            __html: [
               `.spinnerThree:before {`,
               `  position: absolute;`,
               `  height: ${props.height}px;`,
               `  width: ${props.width}px;`,
               `  animation: spinner ${props.speed}s linear infinite;`,
               `}`
              ].join('\n')
            }}>
          </style>    
        <div className="spinnerThree" /> 
        </div>
       
    )
}

SpinnerThree.defaultProps = {height: 100, width: 100, speed: 1.3}


export default SpinnerThree;