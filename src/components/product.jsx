import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/Actions";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productData = await response.json();
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="w-full d-flex justify-content-center mt-4">
        <div className="col-md-6">
          <div className="border-0">
            <img
              src={product.image}
              alt="Product"
              height="400px"
              width="400px"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h4>{product.category}</h4>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3 className="display-6 fw-bold my-4 ">${product.price}</h3>
          <div className="col-m-12">
            <Button
              variant="outline-primary "
              className="col-md-6 "
              onClick={() => addProductToCart(product)}
            >
              Add to Cart
            </Button>
            <Button variant="secondary " className="col-md-6">
              <i className="fa fa-shopping-cart me-1 w-full"></i> Go to Cart
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
