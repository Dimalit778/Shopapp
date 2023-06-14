import axios from 'axios';
import React, { useEffect } from 'react';
import './wathes.css';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
// import logger from 'use-reducer-logger';
import Rating from '../../hooks/Rating';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../../hooks/LoadingBox';
import MessageBox from '../../hooks/MessageBox';
import { allProducts } from '../../shopApi/ShopApi';

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
        const result = await axios.request(allProducts);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data.results });
        console.log(result.data.results);
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
          // ! { LOADING BOX COMPONENT }-------
          <LoadingBox />
        ) : error ? (
          // ! { MESSAGE BOX COMPONENT }-------
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          products.map((products) => (
            <li
              className="card card-body justify-content-between"
              key={products.code}
            >
              <Link to={`/${products._id}`}>
                <h2>{products.name}</h2>
              </Link>
              <img
                className="card-image"
                src={products.galleryImages[0].baseUrl}
                alt={products.images.url}
              />
              {/* <p>company : {products.company}</p> */}
              {/* <Rating rating={products.rating} numReview={products.numReview} /> */}
              <p>Price : {products.price.formattedValue}</p>
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
