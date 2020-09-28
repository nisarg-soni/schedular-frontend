import React, { Component } from 'react';
// import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { showInterview, updateInterview } from '../actions/interviewActions';
import { connect } from 'react-redux';
// import store from '../store';

class Editinterview extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: '',
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

	componentDidMount() {
		this.props.showInterview(this.props.match.params.id);

		this.setState({
			id: this.props.initialInterview.id,
			topic: this.props.initialInterview.topic,
			date: this.props.initialInterview.date,
			start: this.props.initialInterview.start,
			finish: this.props.initialInterview.finish,
			interviewer: this.props.initialInterview.interviewer,
			candidate: this.props.initialInterview.candidate
		});
	}

	callUpdate(interviewData) {
		this.props.updateInterview(interviewData);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const interview = {
			id: this.state.id,
			topic: this.state.topic,
			date: this.state.date,
			start: this.state.start,
			finish: this.state.finish,
			interviewer: this.state.interviewer,
			candidate: this.state.candidate
		};

		this.callUpdate(interview);

		setTimeout(() => {
			window.location = '/';
		}, 1000);
	}

	render() {
		return (
			<div>
				<h1>Edit/Update Interview</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<input type="text" name="id" value={this.state.id} hidden readOnly />
					</div>
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
					<button type="submit">Update</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		initialInterview: state.interviews.item
	};
};

Editinterview.propTypes = {
	showInterview: PropTypes.func.isRequired,
	updateInterview: PropTypes.func.isRequired,
	initialInterview: PropTypes.object
};

export default connect(mapStateToProps, { showInterview, updateInterview })(Editinterview);
