import NavBar from "../NAVBAR/navbar";
import RegisterEventForm from "../Body Components/registerForm";
import Footer from "../Footer Components/footer"
function Register(){
    return (
        <div>
            <NavBar cName="RENav"/>
            <RegisterEventForm />
            <Footer />
        </div>
    )
}

export default Register;