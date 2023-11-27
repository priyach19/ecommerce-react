import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { toast } from 'react-toastify';

// fetching data of api and saving data in local storage
// And storing clicked item in  itemToDisplay variable-local storage 
const initial_State = {
    data: localStorage.getItem("productItems")
        ? JSON.parse(localStorage.getItem("productItems"))
        : [],
    itemToDisplay: localStorage.getItem("productView")
        ? JSON.parse(localStorage.getItem("productView"))
        : "",
    loading: false,
    error: null
};



// fetch data using axios and send in the store
export const fetchCardsData = () => async (dispatch) => {
  
    try {
        dispatch(setLoading());
        const response = await axios.get('https://my-json-server.typicode.com/priyach19/martJSON/mealsdata');
        dispatch(fetchDataSuccess(response.data));
    } catch (error) {
        dispatch(fetchDataFailed(error.message));
    }
};

// Post Request
export const addCardData = (cardData) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await axios.post('https://my-json-server.typicode.com/priyach19/martJSON/mealsdata', cardData);
        dispatch(addCardDataSuccess(response.data));
    } catch (error) {
        dispatch(addCardDataFailed(error.message));
    }
};

// Put Request
export const updateCardData = (cardData) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await axios.put(`https://my-json-server.typicode.com/priyach19/martJSON/mealsdata/${cardData.id}`, cardData);
        dispatch(updateCardDataSuccess(response.data));
    } catch (error) {
        dispatch(updateCardDataFailed(error.message));
    }
};

// Delete Request
export const deleteCardData = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        await axios.delete(`https://my-json-server.typicode.com/priyach19/martJSON/mealsdata/${id}`);
        dispatch(deleteCardDataSuccess(id));
    } catch (error) {
        dispatch(deleteCardDataFailed(error.message));
    }
};


// PRODUCT SLICE for creating action on every Reducer
// we cant manage here asynk Thunk fn and creats extra reducer
const productsSlice = createSlice({
    name: "products",
    initialState: initial_State,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        // fetching action payload and put object in state data array
        fetchDataSuccess: (state, action) => {
            state.data = action.payload;
            // console.log(action.payload)
            state.loading = false;
            state.error = null;
            localStorage.setItem("productItems", JSON.stringify(state.data));
        },
        fetchDataFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // push that payload in state data
        addCardDataSuccess: (state, action) => {
            state.data.push(action.payload);
            state.loading = false;
            state.error = null;
            localStorage.setItem("productItems", JSON.stringify(state.data));
            toast.info(`${action.payload.name} is added for Sell`, {
                position: "top-right"
            })
        },
        addCardDataFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
         //  update state data by payload element
        updateCardDataSuccess: (state, action) => {
            const index = state.data.findIndex(card => card.id === action.payload.id);
            state.data[index] = action.payload;
            state.loading = false;
            state.error = null;
            localStorage.setItem("productItems", JSON.stringify(state.data));
            toast.info("Updated SuccessFully !!", {
                position: "top-right"
            })
        },
        updateCardDataFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //for delete single card
        deleteCardDataSuccess: (state, action) => {
            state.data = state.data.filter(card => card.id !== action.payload);
            state.loading = false;
            state.error = null;
            localStorage.setItem("productItems", JSON.stringify(state.data));
            toast.error(`Item is Removed successfully !`, {
                position: "top-right"
            })
        },
        deleteCardDataFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // function for sorting object by price
        sortOblect: (state, action) => {
            let sortedData = state.data.sort((a, b) => a.price - b.price);
            state.data = sortedData;
            localStorage.setItem("productItems", JSON.stringify(state.data));
        },
        // when you click any image then able to see product details 
        productView: (state, action) => {
            state.itemToDisplay = action.payload;
            // Set the JSON string in local storage
            localStorage.setItem("productView", JSON.stringify(action.payload));
        }
    }
})


//exporting all the action
export const { setLoading, fetchDataSuccess, fetchDataFailed,
    addCardDataSuccess, addCardDataFailed,
    updateCardDataSuccess, updateCardDataFailed,
    deleteCardDataSuccess, deleteCardDataFailed, sortOblect, productView } = productsSlice.actions;

export default productsSlice.reducer;


