import React,{useState} from "react";
import { sortObject } from "../store/productSlice";
import { fetchCardsData } from "../store/productSlice";
import { useDispatch } from "react-redux";


const SortProduct=()=>{
    //state to check it is sorted or not
    const [flag,setFlag]=useState(false)

    const dispatch=useDispatch();
   //function to sort the products according to price
    function handleSort(){
        dispatch(sortObject())
        setFlag(true)
    }
    //cancel sorting
    function cancelSort(){
        dispatch(fetchCardsData())
        setFlag(false)
    }

    return(
        <div className="sortbtn">
            <span className="sortspan">
                {/* sort button*/}
                <span onClick={()=>handleSort()}>Sort By Price</span>
                {flag && 
                <span id="cancel" onClick={()=>cancelSort()}>X</span>
                }
            </span>

        </div>
    )
}
export default SortProduct;