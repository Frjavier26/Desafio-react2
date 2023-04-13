import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';


const Formulario = () => {

    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [resultado, setResultado] = useState({isShown: true, msg:'',variant:''});
    
    const validarFormulario = (e) =>{

        e.preventDefault ();

        if (correo === '' || contraseña === '') {
          setResultado({ isShown: true, msg: 'Debes completar todos los campos.', variant: 'primary' });
          return;
      } else if (correo.trim() === 'hola@hola.cl' && contraseña.trim() === 'hola12345') {
        setResultado({ isShown: true, msg: 'Usuario y contraseña correctos.', variant: 'info' });
          return;
      } else {
        setResultado({ isShown: true, msg: 'Favor revisa tus datos de usuario y contraseña.', variant: 'danger' });
          return;
      }
        }

    return(

        <Form onSubmit={validarFormulario}>
          <p>Intenta con: hola@hola.cl y hola12345</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => {setCorreo(e.target.value) }} type="email" placeholder="Enter email" value={correo} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => {setContraseña(e.target.value)}} type="password" placeholder="Password" value={contraseña} />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
        
        {resultado.isShown ? <Alert key={resultado.variant} variant={resultado.variant}>{resultado.msg}</Alert> : null}
      </Form>
    )
}
export default Formulario;