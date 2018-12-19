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
                    name: "Nguyen, Xuan Hoang",
                    userId: "11848949",
                    ticketNumber: 9
                },
                {
                    name: "Jacob",
                    userId: "11848949",
                    ticketNumber: 50
                },
                {
                    name: "Nguyen Van Nhat",
                    userId: "1234567",
                    ticketNumber: 40
                }

            ]
        }
    }

    render() {
        const { users } = this.state;
        const usersSort = users.sort(function(user1, user2) {
            return user2.ticketNumber - user1.ticketNumber;
        });
        usersSort.map((user, index) => { return user.number = (index + 1) });
        return (
            <Container>
                {usersSort.map((user, index) => (

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