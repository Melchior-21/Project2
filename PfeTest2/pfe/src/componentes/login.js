import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario:"",
            password:"",
            respuestaLogin:""
        };

      }
      handleChangeUsuario = async (event) => {
        await this.setState({usuario: event.target.value});
        console.log(this.state.usuario)
      }
      handleChangePassword = async (event) => {
        await this.setState({password: event.target.value});
        console.log(this.state.password)
      }
      handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault()
        var url = 'http://localhost:3002/user/login';
        var data = this.state;
        var init = {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
                'Content-Type': 'application/json'
            }
        }
        fetch(url, init ).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', response)
            this.setState({
                respuestaLogin:response
            })
            if(response.state){
                sessionStorage.setItem("userData",JSON.stringify(response))
                window.location.href ="/dashboard";
            }
        }
        );
      }
    render() {
        const cardStyles = {
            width:500,
            position:"relative"
        }
         return (
            <Container style={{padding: 40, width:500}}>
                <Card style={cardStyles}>
                <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <Card.Title>Acceso</Card.Title>
                        <Card.Text as="div">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="usuario">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ingrese Usuario" 
                                value = {this.state.usuario} 
                                onChange={this.handleChangeUsuario}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                value = {this.state.password} 
                                onChange={this.handleChangePassword}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                            Acceder
                            </Button>
                        </Form>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                
            </Container>

        );
        }
    }

export default Login;