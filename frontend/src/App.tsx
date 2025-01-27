import './index.css'
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { UserProvider } from "./components/UserContext";
import Layout from './components/Layout';
import Home from './components/Home';
import Profile from './components/Profile';
import Pets from './components/Pets';
import Reminders from './components/Reminders';
import Login from './components/Login';
import Register from "./components/Register"
import Contact from './components/Contact';
export default function App() {
  return (
    <>
    <UserProvider>
      <BrowserRouter >
        <Routes >
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/pets' element={<Pets />}/>
              <Route path='/reminders' element={<Reminders />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/profile' element={<Profile />}/>
              <Route path='/contact' element={<Contact />}/>
            </Route>
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </>
  );
}

