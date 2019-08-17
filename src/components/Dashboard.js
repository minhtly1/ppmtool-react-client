import React, { Component } from 'react';
import ProjectItem from './Project/ProjectItem';

class Dashboard extends Component {
	render() {
		return (
			// have to wrap inside for nested components
			<div>
				<h1>Welcome to the Dashboard</h1>
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
			</div>
		);
	}
}

export default Dashboard;