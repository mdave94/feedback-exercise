import Card from "./shared/Card"
import {useState,useContext} from 'react'
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"
import { useEffect } from "react"

const FeedbackForm = () => {

    const [text,setText] = useState('')
    const [rating,setRating] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')

    //using useContext hook 
    //feedbackEdit is the item,not the func
    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
      
        if(feedbackEdit.edit == true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleTextChange = (e)=>{
       
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text!=='' && rating === '' ){
            setBtnDisabled(true)
            setMessage('Minimum 10 characters pls, or set rating')
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setRating(rating)
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
       e.preventDefault()
       console.log(rating)

        if(text.trim().length > 10 && rating !=""){
            const newFeedback = {
                text: text,
                rating: rating
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback)
            }
            setText('')
        }
    }
  return (
   <Card>
        <form onSubmit={handleSubmit}>
            <h2>Give me your opinion</h2>
            <RatingSelect select={(rating)=> setRating(rating)}/>
            <div className="input-group">
                <input type="text" onChange={handleTextChange} placeholder ="Write it my friend" value = {text}/>
                <Button type="submit" isDisabled = {btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
   </Card>
  )
}

export default FeedbackForm
 