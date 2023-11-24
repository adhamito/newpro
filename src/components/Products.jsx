import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
        console.log(data);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };
  const filterProduct = (category) => {
    const updatedList = data.filter((product) => {
      return product.category === category;
    });
    setfilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <ButtonGroup className="d-flex justify-content-center mb-5 pb-5">
          <Button variant="outline-dark me-2" onClick={() => setfilter(data)}>
            All
          </Button>{" "}
          <Button
            variant="outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men
          </Button>{" "}
          <Button
            variant="outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women
          </Button>{" "}
          <Button
            variant="outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelry
          </Button>{" "}
          <Button
            variant="outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </Button>{" "}
        </ButtonGroup>

        <Row xs={1} md={3} className="g-4">
          {filter.map((product) => (
            <Col key={product.id}>
              <Card
                className="h-auto w-auto border-0 mb-3"
                style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              >
                <Card.Img variant="top" src={product.image} height={"300px"} />
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title className="mb-2">
                    {product.title.substring(0, 12)}
                  </Card.Title>
                  <Card.Text className="mb-2">$ {product.price}</Card.Text>
                  <NavLink to={`/products/${product.id}`}>
                    <Button variant="outline-dark">Add to Cart</Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
