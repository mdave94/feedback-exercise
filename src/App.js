import './App.css'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import {useState} from 'react'
import FeedbackData from './components/data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router, Route,Routes,NavLink} from 'react-router-dom' 
import AboutPageLink from './components/AboutPageLink'
import {FeedbackProvider} from './context/FeedbackContext'


function App() {

  const [feedback,setFeedback] = useState(FeedbackData)



  return (
    <FeedbackProvider>
      <Router>
     
      <Header />
      <div className='container'>
        <Routes>
            <Route exact path='/about' element={<AboutPage/>}/>  
            <Route exact path='/' element={<div>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList  />
              
              <AboutPageLink/></div>}/>
        </Routes>
                
                
      
      </div>
      </Router>
    </FeedbackProvider>
   
   
    )}

export default App; 