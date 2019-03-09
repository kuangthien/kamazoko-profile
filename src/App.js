import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/scss/App.scss';
import Dashboard from './pages/Dashboard';
import Modal from 'react-modal';
import ModalContainer from './components/ModalContainer';
import { AppContext } from './context';

class AppProvider extends React.Component {
	state = {
		modalOpenStatus: false,

		setModalOpenStatus: status => {
			this.setState({ modalOpenStatus: Boolean(status) });
		},
	};

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

class App extends Component {
	componentDidMount() {
		window.feather.replace();
		Modal.setAppElement('.App');
	}
	render() {
		return (
			<AppProvider>
				<div className='App'>
					<Dashboard />
					<ModalContainer />
				</div>
			</AppProvider>
		);
	}
}

export default App;
