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
                    number: 2,
                    name: "Nguyen, Xuan Hoang",
                    userId: "11848949",
                    ticketNumber: 0
                },
                {
                    number: 1,
                    name: "Jacob",
                    userId: "11848949",
                    ticketNumber: 45
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
                                number={user.number}
                                name={user.name}
                                userId={user.userId}
                                ticketNumber={user.ticketNumber} />
                        </Col>

                    </Row>
                ))}
            </Container>
        );
    }
}

export default Users;