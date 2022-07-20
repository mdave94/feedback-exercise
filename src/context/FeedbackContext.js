import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>  {
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text: 'tthis item is from context 1',
            rating:10
        },
        {
            id:2,
            text: 'tthis item is from context 2',
            rating:10
        },
        {
            id:3,
            text: 'tthis item is from context 3',
            rating:10
        }
    ])

    // I can't delete directly from the data. 
    // I have to filter out the selected object and save the new list
    const deleteFeedback = (id)=>{
        if(window.confirm('Are You sure ? ')){
          setFeedback(feedback.filter((item)=> item.id !== id) )
        }
    
      }

    const addFeedback=(newFeedback )=>{
    newFeedback.id = uuidv4()
    //copy off the current array, and push the new feedback to the front
    setFeedback([newFeedback,...feedback])
    
    }
    
    return <FeedbackContext.Provider value={{
        feedback:feedback,
        deleteFeedback,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext