import { Card } from '../../components/card/Card';
import React,  {useEffect, useState, useContext} from 'react'
import { UserContext } from '../../context/UserContext';


export const ProductList = () => {
    
    const [products, setProducts] = useState([]);
    const {user} = useContext(UserContext)
    
  
    useEffect(() => {
      getItems('tablets').then((data) => setProducts(data.results));
    }, []) 
  
  
    const getItems = async (query) => {
      debugger
      const url = 'https://api.mercadolibre.com/sites/MLA/search';
      return fetch(`${url}?q=${query}`).then(getJSON);
    };
  
    const getJSON = (response) => response.json();
  
    
    
    return (
        <div>
            <pre>{JSON.stringify(user)}</pre>
           {products.map((prod) => 
                <Card key={prod.id} title={prod.title} price={prod.price} location={prod.address.state_name} image={prod.thumbnail}></Card>
            )} 
        </div>
    )
}
