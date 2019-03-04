import React from 'react';

const Profile = () => {
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
						<tr className='text-uppercase'>
							<th colSpan={2}>Store Info</th>
						</tr>
						<tr>
							<td>Name</td>
							<td>&nbsp;</td>
						</tr>
						<tr>
							<td>Address</td>
							<td>&nbsp;</td>
						</tr>
						<tr>
							<td>Phone #</td>
							<td>&nbsp;</td>
						</tr>
					</table>
				</div>

				<div className='card-text'>
					<table className=' text-muted table   table-borderless  table-sm'>
						<tr className='text-uppercase'>
							<th colSpan={2}>Red Invoice Info</th>
						</tr>
						<tr>
							<td>Company Name</td>
							<td>&nbsp;</td>
						</tr>
						<tr>
							<td>Address</td>
							<td>&nbsp;</td>
						</tr>
						<tr>
							<td>MST</td>
							<td>&nbsp;</td>
						</tr>
					</table>
				</div>

				<a href='/' className='mt-2 btn btn-secondary '>
					Edit Profile
				</a>
			</div>
		</div>
	);
};

export default Profile;
