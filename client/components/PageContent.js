import React, { useState, useEffect } from 'react';

export default function PageContent(props) {
	return (
		<div className='page-content'>
			<div className='side-menu-space'></div>
			<div className='content'>
				<h1>{props.name}</h1>
				{/* <div className='slide-test-content'></div> */}
				{/* <img src='https://www.designblendz.com/hubfs/Portfolio/The_Y_Residence_Architectural_Model/1.jpg' /> */}
			</div>
		</div>
	);
}
