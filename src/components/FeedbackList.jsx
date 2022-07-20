import FeedbackItem from './FeedbackItem'
import {motion,AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackList({handleDelete}) {
  const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No.. No.. Feedback is not here, Senior</p>
    }
    
  return (
    <div className='feedback-list'> 
      <AnimatePresence>
        {feedback.map((item)=> (
          <motion.div 
            initial={{opacity: 0}}
            animate = {{opacity: 1}}
            exit={{opacity:0}}
            key = {item.id}>
            <FeedbackItem  key={item.id} item={item} handleDelete ={handleDelete}/>
          </motion.div>
            
        ))}
      </AnimatePresence>
    </div>
  )
}



export default FeedbackList
