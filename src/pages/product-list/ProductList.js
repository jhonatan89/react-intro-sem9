import { Card } from '../../components/card/Card';
import React,  {useEffect, useState} from 'react'
import './ProductList.scss'


export const ProductList = () => {
    
    const [products, setProducts] = useState([]);
     
    useEffect(() => {
      getItems('tablets').then((data) => setProducts(data.results));
    }, []) 
  
  
    const getItems = async (query) => {
      const url = 'https://api.mercadolibre.com/sites/MLA/search';
      return fetch(`${url}?q=${query}`).then(getJSON);
    };
  
    const getJSON = (response) => response.json();
  
    
    
    return (
        <div className="container product-list">
           {products.map((prod) => 
                <Card key={prod.id} title={prod.title} price={prod.price} location={prod.address.state_name} image={prod.thumbnail}></Card>
            )} 
        </div>
    )
}
