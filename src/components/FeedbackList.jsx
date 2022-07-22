import FeedbackItem from './FeedbackItem'
import {motion,AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No.. No.. Feedback is not here, Senior</p>
    }
    
  return (
    <div className='feedback-list'> 
     
        {feedback.map((item)=> (
     

            <FeedbackItem  key={item.id} item={item} />
            
        
            
        ))}
     
    </div>
  )
}



export default FeedbackList
