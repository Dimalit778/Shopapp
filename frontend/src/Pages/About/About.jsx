import { useEffect, useReducer } from 'react';
import axios from 'axios';

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

const About = () => {
  // const [{ loading, error, products }, dispatch] = useReducer(reducer, {
  //   products: [],
  //   loading: true,
  //   error: '',
  // });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({ type: 'FETCH_REQUEST' });
  //     try {
  //       const result = await axios.request(options);
  //       dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
  //       console.log(result.data.results);
  //     } catch (err) {
  //       dispatch({ type: 'FETCH_FAIL', payload: err.message });
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="">
      <h1>aboutttt</h1>
    </div>
  );
};

export default About;
