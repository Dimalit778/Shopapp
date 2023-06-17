import axios from 'axios';
import React, { useEffect } from 'react';
import './products.css';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
// import logger from 'use-reducer-logger';
import Rating from '../../hooks/Rating';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../../hooks/LoadingBox';
import MessageBox from '../../hooks/MessageBox';

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

const ProductsList = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.request();
        // console.log(result.data.products);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data.products });
        // console.log(result.products);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Card-container">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <ul className="watchCard  d-flex flex-wrap gap-5  ">
        {loading ? (
          // ! { LOADING BOX COMPONENT }-------
          <LoadingBox />
        ) : error ? (
          // ! { MESSAGE BOX COMPONENT }-------
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          products.map((products) => (
            <li
              className="card card-body justify-content-between"
              key={products.id}
            >
              <Link to={`product/${products.id}`}>
                <h2>{products.name}</h2>
              </Link>

              <img
                className="card-image"
                src={products.imageUrl}
                alt={products.id}
              />
              <p>Brand : {products.brandName}</p>
              <Rating rating={products.rating} numReview={products.numReview} />
              <p>Price : {products.price.current.text}</p>
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

export default ProductsList;
