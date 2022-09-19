import './App.css';
import NavBar from './Components/Navbar';
import Banner from './Components/Banner'
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;