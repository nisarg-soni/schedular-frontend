import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createInterview } from '../actions/interviewActions';

class InterviewForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topic: '',
			date: '',
			start: '',
			finish: '',
			interviewer: '',
			candidate: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const interview = {
			topic: this.state.topic,
			date: this.state.date,
			start: this.state.start,
			finish: this.state.finish,
			interviewer: this.state.interviewer,
			candidate: this.state.candidate
		};

		this.props.createInterview(interview);
	}

	render() {
		return (
			<div>
				<h1>Interview Form</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Topic</label>
						<input type="text" name="topic" value={this.state.topic} onChange={this.onChange} />
					</div>
					<br />
					<div>
						<label>Date</label>
						<input type="date" name="date" value={this.state.date} onChange={this.onChange} />
					</div>
					<br />
					<div>
						<label>Start Time</label>
						<input type="time" name="start" value={this.state.start} onChange={this.onChange} />
					</div>
					<br />
					<div>
						<label>End Time</label>
						<input type="time" name="finish" value={this.state.finish} onChange={this.onChange} />
					</div>
					<br />
					<div>
						<label>Interviewer Email</label>
						<input type="text" name="interviewer" value={this.state.interviewer} onChange={this.onChange} />
					</div>
					<br />
					<div>
						<label>Candidate Email</label>
						<input type="text" name="candidate" value={this.state.candidate} onChange={this.onChange} />
					</div>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

InterviewForm.propTypes = {
	createInterview: PropTypes.func.isRequired
};

export default connect(null, { createInterview })(InterviewForm);
