import React, { Component } from 'react';
import Modal from 'react-modal';
import { AppContext } from '../context';
import ProfileEditModal from './ProfileEditModal';
const customStyles = {
	content: {
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translateX( -50%)',
	},
};

class componentName extends Component {
	constructor(props) {
		super(props);
		Modal.setAppElement('body');
	}

	render() {
		return (
			<div>
				<style>
					{`
					.ReactModal__Overlay  {overflow: auto; z-index:99999}
					body.ReactModal__Body--open {
						overflow:hidden
					}`}
				</style>
				<Modal
					isOpen={this.context.modalOpenStatus }
					style={customStyles}
					contentLabel='Example Modal'
				>
					<ProfileEditModal
						handleClose={() => {
							console.log('a');
							this.context.setModalOpenStatus(false);
						}}
					/>
				</Modal>
			</div>
		);
	}
}
componentName.contextType = AppContext;

export default componentName;
