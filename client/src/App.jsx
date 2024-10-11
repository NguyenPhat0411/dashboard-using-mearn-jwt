import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import Dashboard from './page/Dashboard';
import About from './page/About';
import Project from './page/Project';
import Header from './components/Header';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/about' element={<About />} />
                <Route path='/project' element={<Project />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
