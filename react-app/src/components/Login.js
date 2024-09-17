import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

function Login() {
    
    let navigate = useNavigate()

    const submitHandler = e => {
        
        e.preventDefault();         
        console.log("se va el form");
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        //validaciones
        const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        
        if (email === "" || password === "") {
            const notify = () => toast("Los campos no pueden estar vacios",  {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            notify()
            return
       }

       if(email !== "" && !regexEmail.test(email)) {
        const notify = () => toast('Debe escribir una direccion de mail correcta', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            notify()
        return
       }

       if (email !== "challenge@alkemy.org" || password !== "react") {
        const notify = () => toast('Credenciales invalidaz', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            notify()
        return
        
       }

       console.log("ok listos para enviar la info");
       //axios
       axios
        .post("http://challenge-react.alkemy.org", {email, password})
        .then(res => {
            toast('Ingresaste correctamente', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            console.log(res.data);
            const tokenRecibido = res.data.token;
            sessionStorage.setItem("token", tokenRecibido);
            navigate("/listado")
        })
    }

        let token = sessionStorage.getItem("token")
    return(
        <>
        {token && redirect("/listado")}
        <h2> Formulario de login</h2>
        <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>
                <span> Correo electronico</span> <br/>
                <input type="text" name="email"></input>
            </label>
            <br />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
                <span> Constraseña</span> <br/>   
                <input type="password" name="password"></input>
            </Form.Label>
            <br />
            </Form.Group>

            <Button variant="primary" type="submit">
              Ingresar
            </Button>
             </Form>
        </>
    )
}

export default Login

