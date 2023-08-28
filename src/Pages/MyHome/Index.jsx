import { useState, useEffect } from 'react';
import Card from '../../Components/Card/index.jsx';
import ProductDetail from '../../Components/ProductDetail/index.jsx';
import axios from 'axios';

function Home() {

  const [items, setItems] = useState(null); 
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12') // vienen en forma de promesa, por eso necesitamos then para resolver la promesa.
      .then(response => response.json())
      .then (resp => {
        for (let i = 0; i < resp.data.results.length; i++) {
          fetch(resp.data.results[i].url)
          .then(result=>{
            setItems(prevArray=>[...prevArray, result.data])
          })
        }
      }) // ahora esta en json, despues se transforma la info para que funcione de la manera que necesitamos.
  }, []) /* valor por defecto */

  return (
    <div className='mt-[9vh] md:mt-[6vh]'>

      <h1 className='font-medium text-xl text-center my-[3vh]'>
        Home
      </h1>
      
      <div className='grid grid-cols-3 md:grid-cols-6 gap-[3vh] w-full max-w-screen-xl'>

        {
          items?.map((item) => (
            <Card key={item.id} data={item} />
            ))
        }

      </div>

      <ProductDetail/>

    </div>
  )
}

export default Home