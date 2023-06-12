import React, { useEffect } from 'react';
import { useReducer } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Card, Badge, Button } from 'react-bootstrap';
import './watch.css';
import Rating from '../../hooks/Rating';
import { Helmet } from 'react-helmet-async';

//// ! REDUX TO PRODUCTS----------
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Watch = () => {
  const params = useParams();
  const { id } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });
  //// ! GET DATA FROM DATABASE ----------
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/product/id/${id}`);

        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [id]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    //// ! WATCH CARD ----------
    <div className="watch-card mt-5">
      <Row>
        {/* PHOTO */}
        <Col md={6}>
          <img className="img-large" src={product.img} alt={product.img}></img>
        </Col>
        {/* MIDDLE DETAILS */}
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price : $ {product.price}</ListGroup.Item>
            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        {/* LEFT - BUY NOW */}
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price</Col>
                    <Col> ${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* CHECK IF PRODUCT AVAILABLE */}
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      {' '}
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {/* BTN ADD TO CART IF PRODUCT AVAILABLE*/}
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Watch;
