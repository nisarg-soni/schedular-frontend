import React, { Component } from 'react';
import Interviews from './Interviews';
import Interviewform from './Interviewform';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Interviews />
				<Interviewform />
			</div>
		);
	}
}
