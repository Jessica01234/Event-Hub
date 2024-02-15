import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Components/Routes/Home'
import CreateEvent from './Components/Routes/createEvent';
import DashBoard from './Components/Routes/dashBoard';
import SignUp from './Components/Routes/signUp';
import Register from './Components/Routes/registerEvent';
import LogInComponent from './Components/Body Components/logInComp';
import InPerson from './Components/Body Components/InPerson';
import Virtual from './Components/Body Components/Virtual';
import Hybrid from './Components/Body Components/Hybrid';
import CreateEventForm from './Components/Body Components/createEventForm';

function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/createEvent' element={<CreateEvent/>}/>
                    <Route path='/dashboard' element={<DashBoard/>}/>
                    <Route path='/signUp' element={<SignUp/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/logIn' element={<LogInComponent/>}/>
                    <Route path='/inPerson' element={<InPerson/>}/>
                    <Route path='/virtual' element={<Virtual/>}/>
                    <Route path='/hybrid' element={<Hybrid/>}/>
                    <Route path='/inPersonForm' element={<CreateEventForm/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;