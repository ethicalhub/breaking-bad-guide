import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import Quote from './components/ui/Quote'
import CharacterGrid from './components/character/CharacterGrid'


function App() {

  const [ items , setItems ] = useState([])
  const [ isLoading , setIsLoading ] = useState(true)
  const [ query , setQuery ] = useState('')
  const [quote ,  setQuote] = useState([])

  useEffect(()=>{
    const fetchItems = async()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      const result2 = await axios(`https://breakingbadapi.com/api/quote/random`)
      
      setItems(result.data)
      setIsLoading(false)
      setQuote(result2.data)
    }

    fetchItems();
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(a)=>{
        setQuery(a)
      }} />

      <Quote data={quote} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
