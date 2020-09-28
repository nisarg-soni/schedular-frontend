import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchInterviews, deleteInterview } from '../actions/interviewActions';

class Interviews extends Component {
	componentDidMount() {
		this.props.fetchInterviews();
	}

	callDelete(id) {
		console.log('callDelete called');
		this.props.deleteInterview(id);
	}

	render() {
		const interviewList = this.props.interviewList.map((item) => {
			return (
				<div key={item.id}>
					<h3>Topic: {item.topic}</h3>
					<p>Date: {item.date}</p>
					<p>Start Time: {item.start}</p>
					<p>End Time: {item.finish}</p>
					<p>Participants: {item.participants.map((one) => one.name).join(' , ')}</p>
					<button onClick={this.callDelete.bind(this, item.id)}>Delete</button>
				</div>
			);
		});
		return (
			<div>
				<h1>Interview</h1>
				{interviewList}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	interviewList: state.interviews.items,
	deleteId: state.interviews.deleteId
});

Interviews.propTypes = {
	fetchInterviews: PropTypes.func.isRequired,
	interviewList: PropTypes.array.isRequired,
	deleteInterview: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { fetchInterviews, deleteInterview })(Interviews);
