import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import {useState} from 'react'
import FeedbackData from './components/data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid'

function App() {

  const [feedback,setFeedback] = useState(FeedbackData)
  
  // I can't delete directly from the data. 
  // I have to filter out the selected object and save the new list

  const deleteFeedback = (id)=>{
    if(window.confirm('Are You sure ? ')){
      setFeedback(feedback.filter((item)=> item.id !== id) )
    }
    console.log('from App  ',id)

  }


  const addFeedback=(newFeedback )=>{
    newFeedback.id = uuidv4()
    //copy off the current array, and push the new feedback to the front
    setFeedback([newFeedback,...feedback])
    
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
   
    )}

export default App;
   