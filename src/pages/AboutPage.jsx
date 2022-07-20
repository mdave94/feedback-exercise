import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

const AboutPage = () => {
  return (
   <Card className="about">
        <h1>About</h1>
        <p>Trought this project I learn about react.js</p>
    
    <Link to="/">Back</Link>
   </Card>
  )
}

export default AboutPage
