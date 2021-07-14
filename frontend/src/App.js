import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layout/Footer';
import Topmenu from './components/layout/Topmenu';
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (

    <Router>
      <div>
        <Topmenu />
        <Route exact path="/" component={Landing} />
        <Container>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Container>
        <Footer></Footer>
    </div>
    </Router>


  );
}

export default App;
