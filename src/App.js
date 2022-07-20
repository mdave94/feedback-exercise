import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import {useState} from 'react'
import FeedbackData from './components/data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid'
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom' 
import AboutPageLink from './components/AboutPageLink';



function App() {

  const [feedback,setFeedback] = useState(FeedbackData)

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

  return (
    <Router>
     
      <Header />
      <div className='container'>
        <Routes>
            <Route exact path='/about' element={<AboutPage/>}/>  
            <Route exact path='/' element={<div>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
              <AboutPageLink/></div>}/>
        </Routes>
                
                
                
          
     
      </div>
    </Router>
   
    )}

export default App;
   