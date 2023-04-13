import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Login from './Components/Login';
import Alert from 'react-bootstrap/Alert';

function App() {

  return (

    <Container className='mt-5'>
      <Login/>
    </Container>
  )
}

export default App
