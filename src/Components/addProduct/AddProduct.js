import React, { useState } from 'react'
import './AddProduct.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// addCardDataSuccess function from product slice
import { addCardDataSuccess } from '../../store/productSlice';

const AddProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

// useState for reflect Change in input data
    const [itemName, setItemName] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [urlImage, setUrlImage] = useState('');

// Functin For Handle Submit Action
    function handleSubmit(event) {
        event.preventDefault();

        let formData = {
            id: Date.now(),
            name: itemName,
            rname: restaurantName,
            imgdata: urlImage,
            address: address,
            somedata: "overview will update !! new Item",
            price: price,
            rating: "3",
            overview: "Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.",
            qnty:0   
        }
        //send this form data as action payload
        dispatch(addCardDataSuccess(formData))
        // console.log(formData)
        navigate("/")
    }


    return (
        <div>
            <h4 className='text-primary  text-center mt-2 mb-3'><strong>Add Your Dish and Receipies to Sell</strong> </h4>
            <div className='d-flex justify-content-center w-100'>
                {/* form and input with on change function  */}
                <form className='addproduct-form' onSubmit={handleSubmit}>
                    <input type="text" placeholder="Write your receipy name" onChange={(e) => setItemName(e.target.value)} required />
                    <input type="text" placeholder="Write your Restaurant name" onChange={(e) => setRestaurantName(e.target.value)} required/>
                    <input type="text" placeholder="your Restaurant address..?" onChange={(e) => setAddress(e.target.value)} required/>
                    <input type="text" placeholder="set price of item.. ₹" onChange={(e) => setPrice(e.target.value)} required />
                    <input type="text" placeholder='Image URL' onChange={(e) => setUrlImage(e.target.value)} />
              
              <button type="submit" class="btn modal-btn">Add a New Dish</button>
          </form>
    </div>
        </div>
  )
}

export default AddProduct