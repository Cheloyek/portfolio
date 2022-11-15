import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

const App = () => {
  return (
      <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </div>
  );
}

export default App;
