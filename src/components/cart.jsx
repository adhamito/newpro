import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delCart } from "../redux/Actions";
import { NavLink } from "react-router-dom";
import { updateCart } from "../redux/Actions";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const handleUpdate = (item, isIncrement) => {
    const updatedQuantity = isIncrement
      ? (item.qty || 0) + 1
      : Math.max((item.qty || 0) - 1, 1);

    dispatch(
      updateCart({
        id: item.id,
        data: { ...item, qty: updatedQuantity },
      })
    );
  };
  const subtotal = () => {
    let total = 0;
    state.forEach((item) => {
      total += item.price * (item.qty || 1);
    });
    return total;
  };

  const state = useSelector((state) => state.handlecart);

  const cartItems = (product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(product)}
            className="btn btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                ${product.price}
                <button
                  onClick={() => handleUpdate(product, true)}
                  className="btn btn-outline-primary ms-2"
                >
                  <i className="fa fa-plus"></i>
                </button>
                <span className="mx-2">{product.qty || 1}</span>
                <button
                  onClick={() => {
                    if (product.qty > 1) {
                      handleUpdate(product, false);
                    } else {
                      handleClose(product);
                    }
                  }}
                  className="btn btn-outline-primary ms-2"
                >
                  <i className="fa fa-minus"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto text-center text=white fw-bold"
          >
            Proceed To checkout (${subtotal()})
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
