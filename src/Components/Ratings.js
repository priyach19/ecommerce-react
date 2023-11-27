import { Rating } from '@mui/material'
import React from 'react'

const Ratings = ({ value }) => {
    value = +value;
    return (
        // using material UI
        <Rating
            name="simple-controlled"
            value={value ? value : 0}
        />
    )
}

export default Ratings