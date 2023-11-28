import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { MdDeleteForever } from "react-icons/md"
import Ratings from "./Ratings";
//getting cart item
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// Import Reducer Functions
import {
  removeFromCart,
  decreaseCart,
  addCart,
  clearCart,
  getTotals,
  placeOrder
} from "../store/cartSlice";

function OrderModal(props) {
  
  const cart = useSelector((state) => state.cart);
  //dispatch function 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  //functions for handling cart
  const removeFromCartFn = (element) => {
    dispatch(removeFromCart(element));
  };
 
  const decreaseCartItem = (element) => {
    dispatch(decreaseCart(element));
  };
 
  const increaseCartItem = (element) => {
    dispatch(addCart(element));
  };
 
  const clearCartItem = () => {
    dispatch(clearCart());
  };
  const placeYourOrder=()=>{
    dispatch(placeOrder())
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* mdal header  */}
      <Modal.Header closeButton className="bg-primary text-light">
        <Modal.Title id="contained-modal-title-vcenter" className="ms-auto">
          <span>Number of Items : </span>
          {cart.cartItems.length ? cart.cartItems.length : " No Item in Cart"}
        </Modal.Title>
      </Modal.Header>
      {/* modal body  */}
      <Modal.Body>
        {
          //  mapping array object and find product value 
          cart.cartItems.map((element) => {
            return (
              <div key={element.id}>
                <section className="container mt-1">
                  <div className="itemsdetails">
                    <div className="items__img">
                      <img src={element.imgdata} alt="" />
                    </div>

                    {/* table for item description  */}
                    <div className="details">
                    
                      <Table>
                        <tr>
                          <td style={{ color: "#033fff" }}>
                          <p>
                              {" "}
                              <strong>Description</strong> : {element.name}
                            </p>
                            <p>
                              {" "}
                              <strong>Price</strong> : ₹ {element.price}
                            </p>
                            <p>
                              {" "}
                              <strong>Total</strong> :₹{" "}
                              {element.price * element.qnty}{" "}
                            </p>
                            <p>
                              <strong>Rating :</strong> <Ratings value="3" />
                            </p>
                            <div
                              className="mt-2 d-flex justify-content-between align-items-center"
                              style={{
                                width: 90,
                                height: 30,
                                borderRadius: 40,
                                cursor: "pointer",
                                background: "#033fff",
                                color: "#111",
                              }}
                            >
                              <span
                                style={{ fontSize: 24, color: "white" }}
                                onClick={() => decreaseCartItem(element)}
                              >
                                −
                              </span>
                              <span style={{ fontSize: 24, color: "white" }}>
                                {element.qnty}
                              </span>
                              <span
                                style={{ fontSize: 24, color: "white" }}
                                onClick={() => increaseCartItem(element)}
                              >
                                +
                              </span>
                            </div>
                            </td>
                            </tr>
                            <hr/>
                           <tr>
                            <p onClick={() => removeFromCartFn(element)}>
                               <span>
                                <MdDeleteForever
                                  className="fas fa-trash"
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                ></MdDeleteForever>{" "}
                              </span>
                            </p>
                            </tr>
                        
                      </Table>
                    </div>
                  </div>
                </section>
              </div>
            );
          })
        }
      </Modal.Body>
      {/* modal footer  */}
      <Modal.Footer className="d-flex justify-content-between">
        <Button className="btn modal-btn" onClick={() => clearCartItem()}>
          Empty Cart
        </Button>
        <div style={{ color: "blue", fontSize: 20 }}>
          <strong>Total payable Amount</strong> : ₹ {cart.cartTotalAmount}
        </div>
        <Button onClick={() => placeYourOrder()} className="btn modal-btn">
          Place Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderModal;
