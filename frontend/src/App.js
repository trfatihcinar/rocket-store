import Header from './components/Header'
import Footer from './components/Footer'
/* Import Bootswatch */
import './bootstrap.min.css' 
/* Import Screens */
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header></Header>
      <Route path = '/' component = {HomeScreen} exact></Route>
      <Footer></Footer>
    </Router>
  );
}

export default App;
