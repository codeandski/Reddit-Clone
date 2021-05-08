import React from 'react';

import './LoadingIndicator.scss';  

export function LoadingIndicator(props: any) {
    return (  
       <div className="loadingIndicator-container"> 
            <div className="loadingIndicator-icon">
                <div></div>
            </div>
       </div>   
    )
}