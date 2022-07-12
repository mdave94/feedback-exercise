import Card from "./shared/Card"
import {useState} from 'react'
import Button from "./shared/Button"

const FeedbackForm = () => {

    const [text,setText] = useState('')

    const handleTextChange = (e)=>{
        setText(e.target.value)
    }
  return (
   <Card>
        <form>
            <h2>Give me your opinion</h2>
            <div className="input-group">
                <input type="text" onChange={handleTextChange} placeholder ="Write it my friend" value = {text}/>
                <Button type="submit" version="secondary">Send</Button>
            </div>
        </form>
   </Card>
  )
}

export default FeedbackForm
 