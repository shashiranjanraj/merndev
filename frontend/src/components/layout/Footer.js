import React, { Component } from "react";

import { Card } from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <div>
                <Card bg="dark">
                    <Card.Body>Copyright &copy; {new Date().getFullYear()} Shashi Ranjan </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Footer;