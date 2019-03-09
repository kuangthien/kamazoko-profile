import React, { Component } from 'react';
import Modal from 'react-modal';
import { AppContext } from '../context';
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

class componentName extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Modal
					isOpen={this.context.modalOpenStatus}
 					style={customStyles}
					contentLabel='Example Modal'
				>
					Modal content
				</Modal>
			</div>
		);
	}
}
componentName.contextType = AppContext;

export default componentName;
