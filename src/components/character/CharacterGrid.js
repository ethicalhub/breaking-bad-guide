import React from 'react'
import CharaterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({items,isLoading})=> {
    return (

        isLoading? <Spinner / > : <section className="cards">
  
        {

            items.map((item)=>{
                return(
                    
                    <CharaterItem 
                    key={item.char_id} 
                    item = {item} 
                    />
                )

                

            })
        }
            
        </section>
    )
}

export default CharacterGrid 