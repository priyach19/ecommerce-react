import React from 'react'
//import table
import Table from 'react-bootstrap/Table'
import Ratings from './Ratings'
//importing useDispatch and useSelector 
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addCart } from '../store/cartSlice';


const CardsDetails = (props) => {
    const dispatch = useDispatch();
    //  use data(added to cart data)
    const viewItem = useSelector((state) => state.products.itemToDisplay)
    
    //handle cart function
    const addCartHandle = (element) => {
       //adding in store
        dispatch(addCart(element));
    }

  return (
      <div className='container mt-3 '>
          <h3 className='text-center text-light'>Item Details</h3>
          <section className='container mt-2'>
              <div className="itemsdetails">
                  <div className="items__img">
                      <img src={viewItem.imgdata} alt="" />
                  </div>
                  {/* table for item description  */}
                  <div className="details">
                      {/* react-bootstap table  */}
                      <Table>
                          <tr>
                              <td style={{color:"#fff"}}>
                                  <p> <strong>Restaurant</strong>  : {viewItem.rname} </p>
                                  <p><small>{viewItem.name }</small></p>
                                  <p> <strong>Price</strong>  : ₹ {viewItem.price }</p>
                                  <p> <strong>Address</strong>  : {viewItem.address}</p>
                              </td>
                              <td style={{ color: "#fff" }}>
                                  <p><strong>Rating :</strong> <Ratings value={viewItem.rating} /></p>
                                  <p><strong>Order Review :</strong> <span >{viewItem.somedata}</span></p>
                                  <p>☟</p>
                                  <button className='
                                  
                                  
                                  detailbtn bg-secondary' onClick={() => addCartHandle(viewItem)}>Add To Cart</button>
                              </td>
                          </tr>
                      </Table>
                  </div>
              </div>
          </section>

          <div className='container mt-3 w-75'>
              <p className='text-secondary'>{viewItem.overview}</p>
              
          </div>
    </div>
  )
}

export default CardsDetails