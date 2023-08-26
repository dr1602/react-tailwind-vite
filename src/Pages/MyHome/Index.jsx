import { useState, useEffect } from 'react';
import Card from '../../Components/Card/index.jsx';
import ProductDetail from '../../Components/ProductDetail/index.jsx';

function Home() {

  const [items, setItems] = useState(null); 

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/') // vienen en forma de promesa, por eso necesitamos then para resolver la promesa.
      .then (response => response.json()) // ahora esta en json, despues se transforma la info para que funcione de la manera que necesitamos.
      .then(data => setItems(data)) // le mandamos la 'data' a setItems
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