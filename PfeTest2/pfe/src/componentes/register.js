import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import React from 'react'


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre : "",
            nacionalidad : '',
            usuario:"",
            password:"",
            sexo:0,
            email:"",
            nacionalidades:[],
            apellido:undefined,
            webPage:undefined

        };
    }
    handleNombre = async (event) => {
        await this.setState({nombre: event.target.value});
        console.log(this.state.nombre)
    }
    handleNacionalidad = async (event) => {
        await this.setState({nacionalidad: event.target.value});
        console.log(this.state.nacionalidad)

    }
    handleUsuario = async (event) => {
        await this.setState({usuario: event.target.value});
        console.log(this.state.usuario)
        
    }
    handlePassword = async (event) => {
        await this.setState({password: (event.target.value)});
        console.log(this.state.usuario)
    }
    handleSexo = async (event) => {
        await this.setState({sexo: event.target.value});
        console.log(this.state.sexo)

    }
    handleEmail = async (event) => {
        await this.setState({email: event.target.value});
        console.log(this.state.email)

    }
    handleApellido = async (event) => {
        await this.setState({apellido: event.target.value});
        console.log(this.state.apellido)

    }
    handleWebPage = async (event) => {
        await this.setState({webPage: event.target.value});
        console.log(this.state.webPage)

    }
    getNacionalidad = async () =>{
        var url = 'http://localhost:3001/user/getNacionalidad'
        var init = {
            method: 'POST', 
        }
        await fetch(url, init ).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            this.setState({
                nacionalidades : response.nacionalidades
            })
           
        }
        );
       
    }
    handleClick = async () => {
        console.log('handle aca')
        var url = 'http://localhost:3001/user/createUser'
        var init = {
            method: 'POST', 
            body: JSON.stringify(this.state),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        await fetch(url, init ).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log(response)
           
        }
        );


    }
    componentDidMount = async () =>{
        await this.getNacionalidad()
    }
    render = () =>{
        const cardStyles = {
            width:500,
            position:"relative"
        }
        return(
            <Container style={{padding: 40, width:500}}>
                <Card style={cardStyles}>
                <Card.Header>Formulario de Registro</Card.Header>
                    <Card.Body>
                        <Card.Title>Register</Card.Title>
                        <Card.Text as="div">
                     
                            <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                value = {this.state.nombre} 
                                type="text" 
                                placeholder="Ingrese Nombre" 
                                required
                                onChange={this.handleNombre}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="apellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control 
                                value = {this.state.apellido} 
                                type="text" 
                                placeholder="Ingrese Apellido" 
                                required
                                onChange={this.handleApellido}
                                />
                            </Form.Group>
        
                            <Form.Group className="mb-3" controlId="nacionalidad">
                            <Form.Label>Nacionalidad</Form.Label>
                            <Form.Select  
                                aria-label="Nacionalidad" 
                                required
                                onChange={this.handleNacionalidad}
                                >
                                <option value = "11" >Chile</option>
                                <option value = "-1" disabled>-- Otros paises --</option>
                                {
                                this.state.nacionalidades.map(nacionalidad => (
                                            <option 
                                            key  = {nacionalidad.id} 
                                            value={nacionalidad.id}>
                                            {nacionalidad.descripcion}
                                            </option> )
                                )
                                }
                            </Form.Select>
                            </Form.Group> 
        
                            <Form.Group className="mb-3" controlId="usuario">
                            <Form.Label>Sexo</Form.Label>
                            <Form.Select 
                                value = {this.state.sexo} 
                                aria-label="Sexo" 
                                required
                                onChange={this.handleSexo}
                              
                                >
                                <option disabled >Seleccionar</option>
                                <option value="0">Hombre</option>
                                <option value="1">Mujer</option>
                                <option value="2">Otr@</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="web_page">
                            <Form.Label>WebPage</Form.Label>
                            <Form.Control 
                                value = {this.state.webPage} 
                                type="text" 
                                placeholder="http://ejemplo.com" 
                                required
                                onChange={this.handleWebPage}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                value = {this.state.email} 
                                type="email" 
                                placeholder="email@ejemplo.com" 
                                required
                                onChange={this.handleEmail}
                                />
                            </Form.Group>
        
                            <Form.Group className="mb-3" controlId="usuario">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control 
                                value = {this.state.usuario} 
                                type="text" 
                                placeholder="Ingrese Usuario" 
                                required 
                                onChange={this.handleUsuario}
                                />
                            </Form.Group>
        
                            <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                value = {this.state.password} 
                                type="password" 
                                placeholder="Password" 
                                required
                                onChange={this.handlePassword}
                                />
                            </Form.Group>
                            <Button 
                                onClick={this.handleClick} 
                                variant="primary" 
                                type="submit">
                            Crear Cuenta
                            </Button> 
                      
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </Container>
        
        );
    }
    
}
  
export default Register;