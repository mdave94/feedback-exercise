import Card from "./shared/Card"
import {useState,useContext} from 'react'
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackForm = () => {

    const [text,setText] = useState('')
    const [rating,setRating] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')

    //using useContext hook 
    const {addFeedback} = useContext(FeedbackContext)



    const handleTextChange = (e)=>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text!=='' && text.trim().length<=10){
            setBtnDisabled(true)
            setMessage('Minimum 10 characters pls')
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10 ){
            const newFeedback = {
                text: text,
                rating: rating
            }

            addFeedback(newFeedback)
            
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
 