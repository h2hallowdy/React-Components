import React, { Component } from 'react';

import {
    Container, Row, Col
} from 'reactstrap';
import UserInfor from '../components/UserInfor';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    number: "02",
                    name: "Nguyen, Xuan Hoang",
                    userId: "11848949",
                    ticketNumber: 0
                },
                {
                    number: "01",
                    name: "Jacob",
                    userId: "11848949",
                    ticketNumber: 45
                },
                {
                    number: "03",
                    name: "Nguyen Van Nhat",
                    userId: "1234567",
                    ticketNumber: 40
                }

            ]
        }
    }

    render() {
        const { users } = this.state;
        return (
            <Container>
                {users.map((user, index) => (
                    <Row>
                        <Col className="col-md-12">
                            <UserInfor 
                            user={user}/>
                        </Col>

                    </Row>
                ))}
            </Container>
        );
    }
}

export default Users;