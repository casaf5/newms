import React, { Component } from 'react';
import './ContactFilter.scss';
export class ContactFilter extends Component {
	onChangeHandler = (ev) => {
		const value = ev.target.value
        this.setState({ [ev.target.name]: value }, () => {
            this.props.onSetFilter({ ...this.state })
        })
    }
	render() {
		return (
			<form className="contact-filter">
				<label htmlFor="" />
				<input
					name="name"
					placeholder="Search For Contacts By Name / Phone"
					value={this.props.term}
					type="text"
					onChange={this.onChangeHandler}
				/>
			</form>
		);
	}
}
