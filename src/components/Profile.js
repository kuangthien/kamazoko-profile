import React, { Component } from 'react';
import axios from 'axios';
import { AppContext } from '../context';
const url = process.env.REACT_APP_API_URL;

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profile: null,
		};
	}
	openModal = () => {
		this.context.setModalOpenStatus(true)
	};
	componentDidMount() {
		axios
			.get(`${url}/profile`)
			.then(rs => {
				this.setState({
					profile: rs.data,
				});
			})
			.catch(e => e);
	}
	render() {
		const { profile } = this.state;
		if (!profile) return null;

		return (
			<div className='card'>
				<img
					className='card-img-top'
					src='https://loremflickr.com/320/240?random=1'
					alt='Card image cap'
				/>
				<div className='card-body'>
					<div className='card-text'>
						<table className='text-muted table   table-borderless table-sm'>
							<tbody>
								<tr className='text-uppercase'>
									<th colSpan={2}>Store Info</th>
								</tr>
								<tr>
									<td>Name</td>
									<td>{profile.store.name}</td>
								</tr>
								<tr>
									<td>Address</td>
									<td>{profile.store.address}</td>
								</tr>
								<tr>
									<td>Phone #</td>
									<td>{profile.store.phone}</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className='card-text'>
						<table className=' text-muted table   table-borderless  table-sm'>
							<tbody>
								<tr className='text-uppercase'>
									<th colSpan={2}>Red Invoice Info</th>
								</tr>
								<tr>
									<td>Company Name</td>
									<td>{profile.redInvoice.companyName}</td>
								</tr>
								<tr>
									<td>Address</td>
									<td>{profile.redInvoice.address}</td>
								</tr>
								<tr>
									<td>MST</td>
									<td>{profile.redInvoice.mst}</td>
								</tr>
							</tbody>
						</table>
					</div>

					<a
						className='mt-2 btn btn-secondary text-white'
						onClick={this.openModal}
						href={`javascript:void(0)`}
					>
						Edit Profile
					</a>
				</div>
			</div>
		);
	}
}

Profile.contextType = AppContext;
export default Profile;
