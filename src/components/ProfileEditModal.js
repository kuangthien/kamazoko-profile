import React from 'react';

const ProfileEditModal = props => {
	return (
		<div className='col-12'>
			<div className='row'>
				<div className='col-5'>
					<div className='p-2'>
						<img
							className='card-img-top'
							src='https://loremflickr.com/320/240?random=1'
                            alt='Card image cap'
                            style={{width:'100%', minWidth:160}}
						/>
						<p className='text-right  mt-2'>
							<button className='btn btn-sm btn-secondary'>
								Upload Image
							</button>
						</p>
					</div>
				</div>
				<div className='col-7'>
					<div>
						<h3>Store Info</h3>
						<div className='mb-3'>
							<label>Store Name</label>
							<input
								className='form-control'
								placeholder='Store Name'
							/>
						</div>

						<div className='mb-3'>
							<label>Store Add</label>
							<input
								className='form-control'
								placeholder='Store Add'
							/>
						</div>

						<div className='mb-3'>
							<label>Store Phone</label>
							<input
								className='form-control'
								placeholder='Store Phone'
							/>
						</div>

						<h3>Red Invoice Info</h3>

						<div className='mb-3'>
							<label>Company Name</label>
							<input
								className='form-control'
								placeholder='Company Name'
							/>
						</div>

						<div className='mb-3'>
							<label>Company Add</label>
							<input
								className='form-control'
								placeholder='Company Add'
							/>
						</div>

						<div className='mb-3'>
							<label>Company Phone</label>
							<input
								className='form-control'
								placeholder='Company Phone'
							/>
						</div>
                        <hr/>
						<button
							className='btn btn-primary btn-lg btn-block'
							type='submit'
						>
							Save
						</button>
						<button
							className='btn btn-secondary btn-lg btn-block'
							onClick={props.handleClose}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileEditModal;
