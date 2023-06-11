import { createContext, useState } from 'react';
import axios from 'axios';

const ProductsListCotext = createContext();

export function ProductsListCotextProvider({ children }) {
  const [products, setProducts] = useState([]);

  const data = JSON.stringify({
    collection: 'Products',
    database: 'Store_items',
    dataSource: 'storeClus',
    projection: {
      _id: 1,
    },
  });

  const config = {
    method: 'post',
    url: 'https://eu-central-1.aws.data.mongodb-api.com/app/data-conyx/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.API_KEY,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      setProducts(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <ProductsListCotext.Provider value={{ products }}>
      {children}
    </ProductsListCotext.Provider>
  );
}

export default ProductsListCotext;
