import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import User from './Components/User';
import OldBooks from './Components/OldBooks';
import NewBooks from './Components/NewBooks';
import Login from './Components/Login';
import DashBoard from './Components/DashBoard';


function App() {
  return (
    <div className="App">
      <h1>routers</h1>
      <BrowserRouter>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact-us'>Contact</Link></li>
        <li><Link to= '/user/1'>user1</Link></li>
        <li><Link to= '/user/2'>user2</Link></li>
        <li><Link to= '/Books/old_books'>OldBooks</Link></li>
        <li><Link to= '/Books/new_books'>NewBooks</Link></li>
        <li><Link to= '/login'>login</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/contact-us' element={<Contact/>} ></Route>
        <Route path='/user/:id' element={<User/>}></Route>
        <Route path='/Books' >
    <Route path='old_books' element={<OldBooks/>}></Route>
    <Route path='new_books' element={<NewBooks/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/dashboard' element={<DashBoard/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
