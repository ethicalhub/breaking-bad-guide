import { logDOM } from '@testing-library/react'
import React from 'react'

const Quote = ({data}) => {
    return(
        data.map((d)=>{
        return(
            <div className="search" style={{textAlign:"center"}}>
            <p>{d.quote} </p>
            <h4> -- {d.author}</h4>
             </div>
            
        )
    })
    )


    
}

export default Quote
