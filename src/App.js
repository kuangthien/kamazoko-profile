import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/scss/App.scss';
import Dashboard from './pages/Dashboard';
class App extends Component {
	componentDidMount() {
		window.feather.replace();
	}
	render() {
		return (
			<div className='App'>
				<Dashboard />
			</div>
		);
	}
}

export default App;
