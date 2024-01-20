import { Route, Routes } from 'react-router';

import './App.css';
import MyName from './components/MyName/MyName';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Social from './components/Socials/Social';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className='App2'>

            <Home/>
            <Skills/>
            <Contact/>
            <Projects/>
            <Social/>
            {/* <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes> */}
            <Footer/>
            </div>
        </div>


    );
}

export default App;
