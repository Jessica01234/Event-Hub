import NavBar from "../NAVBAR/navbar";
import InpersonRegisterForm from "../Body Components/InpersonRegister";
import Footer from "../Footer Components/footer"
function Register(){
    return (
        <div>
            <NavBar cName="RENav"/>
            <InpersonRegisterForm />
            <Footer />
        </div>
    )
}

export default Register;