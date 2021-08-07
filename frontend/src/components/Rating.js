import React from 'react'

let rating;

const Rating = ({ value, numReviews, color }) => {
    return (
        <div className = 'rating'>
            <div className='ml-1'></div>
            <span>
               <i style = {{color: color}} className = { value >= 1 ? 'fas fa-star':
                    value >= 0.5 ? 'fas fa-star-half-alt': 'far fa-star'
               }>
               </i>
            </span>
            <span>
               <i style = {{color: color}} className = { value >= 2 ? 'fas fa-star':
                    value >= 1.5 ? 'fas fa-star-half-alt': 'far fa-star'
               }>
               </i>
            </span>
            <span>
               <i style = {{color: color}} className = { value >= 3 ? 'fas fa-star':
                    value >= 2.5 ? 'fas fa-star-half-alt': 'far fa-star'
               }>
               </i>
            </span>
            <span>
               <i style = {{color: color}} className = { value >= 4 ? 'fas fa-star':
                    value >= 3.5 ? 'fas fa-star-half-alt': 'far fa-star'
               }>
               </i>
            </span>
            <span>
               <i style = {{color: color}} className = { value >= 5 ? 'fas fa-star':
                    value >= 4.5 ? 'fas fa-star-half-alt': 'far fa-star'
               }>
               </i>
            </span>
            <span>  </span>
            <span>
                {numReviews =! null ? `from ${numReviews} reviews`: ``}
            </span>
        </div>
    )
}

Rating.defaultProps = {
    color: 'orange',
    numReviews: 0,
    rating: 0
}

export default Rating
