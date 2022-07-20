import React from 'react'
import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackStats = () => {
    const {feedback} = useContext(FeedbackContext)
    //The Reduce method is a method in the javascript array used to reduce the number of elements in an array.
    //the second param 0 is the initial value
    let calculatedAverage = feedback.reduce((summ, element)=>{
        return summ + element.rating
    },0) / feedback.length

    
    calculatedAverage = calculatedAverage.toFixed(1)

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Feedback left</h4>
        <h4> Average rating:
            {isNaN(calculatedAverage) ? 0 : calculatedAverage}
        </h4>
        
    </div>
  )
}



export default FeedbackStats
