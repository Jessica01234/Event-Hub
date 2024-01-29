import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Components/Routes/Home'
import CreateEvent from './Components/Routes/createEvent';
import DashBoard from './Components/Routes/dashBoard';
import SignUp from './Components/Routes/signUp';
import LogInComponent from './Components/Body Components/logInComp';

function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/createEvent' element={<CreateEvent/>}/>
                    <Route path='/dashboard' element={<DashBoard/>}/>
                    <Route path='/signUp' element={<SignUp/>}/>
                    <Route path='/logIn' element={<LogInComponent/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;