import Card from "./shared/Card"
import {useState} from 'react'
import Button from "./shared/Button"

const FeedbackForm = () => {

    const [text,setText] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')

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
  return (
   <Card>
        <form>
            <h2>Give me your opinion</h2>
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
 