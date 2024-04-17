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
import InPersonForm from './Components/Body Components/inPersonForm';
import VirtualForm from './Components/Body Components/virtualForm';
import HybridForm from './Components/Body Components/hybridForm';
import InPersonRegisterForms from './Components/Body Components/registerComp';
import VirtualRegisterForms from './Components/Body Components/VirtaulRegister';
import HybridRegisterForms from './Components/Body Components/HybridRegister';
// import RegisterationForm from './Components/Body Components/RegisterForm';
import Form from './Components/Body Components/form';
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
                    <Route path='/inPersonForm' element={<InPersonForm/>}/>
                    <Route path='/virtualForm' element={<VirtualForm/>}/>
                    <Route path='/hybridForm' element={<HybridForm/>}/>
                    <Route path="/register" element={<InPersonRegisterForms/>}/>
                    <Route path='/virtualRegister' element={<VirtualRegisterForms/>}/>
                    <Route path='/hybridRegister' element={<HybridRegisterForms/>}/>
                    {/* <Route path='/registerForm' element={<RegisterationForm/>}/> */}
                    <Route path='/form' element={<Form/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;