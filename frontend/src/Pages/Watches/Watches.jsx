import axios from 'axios';
import React, { useEffect } from 'react';
import './wathes.css';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
// import logger from 'use-reducer-logger';
import Rating from '../../hooks/Rating';
import { Helmet } from 'react-helmet-async';

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
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
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
      <Helmet>
        <title>Watches</title>
      </Helmet>
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
              <Link to={`watch/${item._id}`}>
                <h2>{item.name}</h2>
              </Link>
              <img className="card-image" src={item.img} alt={item.img} />
              <p>company : {item.company}</p>
              <Rating rating={item.rating} numReview={item.numReview} />
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
