import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from '../components/Button';
import AwesomeImage from '../components/AwesomeImage';
import HoverOpacity from '../components/HoverOpacity';

const HoverOpacityAwesomeImage = HoverOpacity(AwesomeImage, 0.8);
class Components extends Component {
    render() {
        return (
            <Container>
                <Row className="border-bottom mt-3">
                    <Col md={12}>
                        <h3>Button</h3>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col md={3} xs={12} className="mt-2 mb-2">
                        <Button color="blue">Button</Button>
                        <span style={{ marginLeft: 3 }}>Blue</span>

                    </Col>
                    <Col md={3} xs={12} className="mt-2 mb-2">
                        <Button color="red">Button</Button>
                        <span style={{ marginLeft: 3 }}>Red</span>
                    </Col>
                    <Col md={3} xs={12} className="mt-2 mb-2">
                        <Button color="yellow">Button</Button>
                        <span style={{ marginLeft: 3 }}>Yellow</span>
                    </Col>
                    <Col md={3} xs={12} className="mt-2 mb-2">
                        <Button color="green">Button</Button>
                        <span style={{ marginLeft: 3 }}>Green</span>
                    </Col>

                </Row>
                <Row className="mt-2">
                    <Col md={3} xs={12} className="mt-2 mb-2">
                        <Button color="gray">Button</Button>
                        <span style={{ marginLeft: 3 }}>Gray</span>
                    </Col>
                    <Col md={3} xs={12} className="mt-2 mb-2">
                        <Button>Button</Button>
                        <span style={{ marginLeft: 3 }}>Default</span>
                    </Col>
                </Row>
                <Row className="border-bottom mt-3 mb-2">
                    <Col md={12}>
                        <h3>Button Custom Style</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xs={12} className="mt-2 mb-2">
                        <Button styleBtn="ujarak">Button</Button>
                        <span style={{ marginLeft: 3 }}>Ujarak</span>
                    </Col>
                    <Col md={3} xs={12} className="mt-2 mb-2">
                        <Button styleBtn="mirror">Button</Button>
                        <span style={{ marginLeft: 3 }}>Mirror</span>
                    </Col>
                </Row>
                <Row className="border-bottom mt-3 mb-2">
                    <Col md={12}>
                        <h3>Awesome Image</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                        <HoverOpacityAwesomeImage src="https://picsum.photos/200/300" />
                        
                    </Col>
                </Row>
                <Row className="border-bottom mt-3 mb-2">
                    <Col md={12}>
                        <h3>Awesome Image</h3>
                    </Col>
                </Row>
            </Container>

        );

    }
}

export default Components;