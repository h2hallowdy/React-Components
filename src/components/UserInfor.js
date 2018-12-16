import React, { Component } from 'react';
import './UserInfor.css';
import Crown from '../img/crown.svg';
import QueenCrown from '../img/crown_second.svg';
import UserIcon from '../img/man-user.svg';
class UserInfor extends Component {

	render() {
		var { number, name, userId, ticketNumber } = this.props;
		let className = "ranking";
		let url = UserIcon;
		let num = parseInt(number);
		switch (num) {
			case 1:
				className += " border-red";
				url = Crown;
				break;
			case 2:
				className += " border-yell";
				url = QueenCrown;
				break;
			default:
				className += " border-black";
				break;

		}

		return (
			<div className="user-wrapper">

				<img className="king-img"
					src={url} width="32" height="32"
					alt="user-status" />
				<span className={className}>{number}</span>
				<div className="infor">
					<p>{name}</p>
					<p>{userId}</p>
				</div>
				<span className="ticket-number">{ticketNumber}</span>
			</div>
		);
	}
}

export default UserInfor;