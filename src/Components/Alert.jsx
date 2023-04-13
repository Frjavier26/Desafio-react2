import Alert from 'react-bootstrap/Alert';

const Alerta = (props) =>{

<Alert key={props.variant} variant={props.variant}>
    {props.msg}
</Alert>

}
export default Alerta;