import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../NavBar";
import { Banner } from "../Banner";
import { Skills } from "../Skills";
import { Projects } from "../Projects";
import { Contact } from "../Contact";
import { Footer } from "../Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
