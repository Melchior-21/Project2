import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Carrusel from './carrusel'


function Dashboard(){
    return(
        <Container>
            <Card>
                <Card.Header>Dashboard</Card.Header>
                <Card.Body>
                <Card>
                    <Card.Header>Funcion1</Card.Header>
                    <Card.Body>
                        <Carrusel/>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Dashboard</Card.Header>
                    <Card.Body>
                        
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Dashboard</Card.Header>
                    <Card.Body>
                        
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Dashboard</Card.Header>
                    <Card.Body>
                        
                    </Card.Body>
                </Card>  
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Dashboard
