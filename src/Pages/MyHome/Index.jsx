import { useState, useEffect } from 'react';
import Card from '../../Components/Card/index.jsx';
import ProductDetail from '../../Components/ProductDetail/index.jsx';
import { apiUrl } from '../../Api'
// import axios from 'axios';

function Home() {

  const [items, setItems] = useState(null); 
  // const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`)
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.log('Oh no, ocurrió un error:');
      }
    }
    fetchData()
  }, [])

  // const loadData = () => {
  //   fetch ('https://pokeapi.co/api/v2/pokemon?limit=12') // vienen en forma de promesa, por eso necesitamos then para resolver la promesa.
  //     .then(response => response.json())
  //     .then (response => {
  //       setPokemon(response.results);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data: ', error);
  //     })
  // }


  
  // useEffect (loadData, []) /* valor por defecto */

  return (
    <div className='mt-[9vh] md:mt-[6vh]'>

      <h1 className='font-medium text-xl text-center my-[3vh]'>
        Home
      </h1>
      
      <div className='grid grid-cols-3 md:grid-cols-6 gap-[3vh] w-full max-w-screen-xl'>

        {
          // pokemon?.map((poke, index) => (
            items?.map(item => {
              <Card key={item.id} data={item}/>
            })
            // <Card key={index} data={poke.name} />
            // <div key={index}>
            //   <p>{poke.name}</p>
            //   <img src={poke.sprites.front_default} alt='' />
            // </div>
            // ))
        }

      </div>

      <ProductDetail/>

    </div>
  )
}

export default Home