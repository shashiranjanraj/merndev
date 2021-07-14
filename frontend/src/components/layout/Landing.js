import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <Container fluid="md">
                <Row>
                    <Col>
                        <Link to="/register" className="btn btn-primary">SingUp</Link>
                    </Col>
                    <Col>
                        <Link to="/login" className="btn btn-primary">Login</Link>

                    </Col>
                </Row>
            </Container>
        );

    }
}

export default Landing;