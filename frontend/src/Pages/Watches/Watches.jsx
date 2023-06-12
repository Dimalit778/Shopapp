import axios from 'axios';
import React, { useEffect } from 'react';
import { useReducer } from 'react';
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Watches = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products/allProducts');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Card-container">
      <h2 className=""> All watches</h2>
      <ul className="watchCard  d-flex flex-wrap gap-5  ">
        {loading ? (
          <div>Lodaing...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((item) => (
            <li
              className="card card-body justify-content-between"
              key={item._id}
            >
              <h2>{item.name}</h2>
              <img className="card-image" src={item.img} alt="" />
              <p>company : {item.company}</p>
              <p>Price : {item.price}</p>
              <div className="d-flex justify-content-between ">
                <button className="btn-read">Read more</button>
                <button className="btn-cart">Add to cart</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Watches;
