import React, { useState, useEffect } from 'react';

export default function Outlines() {
	return (
		<div id='outlines-wrapper'>
			<div id='outline-bw' className='outlines-containers'>
				<img
					className='outline-images'
					src='https://storage.googleapis.com/kostya-works-public/design/bw-profile-outline.png'
				/>
			</div>
			<div id='outline-red' className='outlines-containers'>
				<img
					className='outline-images'
					src='https://storage.googleapis.com/kostya-works-public/design/red-profile-outline.png'
				/>
			</div>

			<div id='outline-violet' className='outlines-containers'>
				<img
					className='outline-images'
					src='https://storage.googleapis.com/kostya-works-public/design/violet-profile-outline.png'
				/>
			</div>

			<div id='outline-blue' className='outlines-containers'>
				<img
					className='outline-images'
					src='https://storage.googleapis.com/kostya-works-public/design/blue-profile-outline.png'
				/>
			</div>

			<div id='outline-yellow' className='outlines-containers'>
				<img
					className='outline-images'
					src='https://storage.googleapis.com/kostya-works-public/design/yellow-profile-outline.png'
				/>
			</div>
		</div>
	);
}
