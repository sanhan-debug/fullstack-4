import React, { useEffect, useState } from "react";
import style from "../Cards/style.module.css";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

function Cards() {
  let [products, setProducts] = useState([]);

  function getData() {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data));
  }

  useEffect(() => {
    getData();
  },[]);

  return( 
    <>
      <Container>

        <h1>Our Products</h1>
        <span></span>
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product._id}  md={4}>
              <Card>
                <Card.Img variant="top" src={product.image} style={{ width: '33%', height: 'auto' }} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{product.description}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Cards;
