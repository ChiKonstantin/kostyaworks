import React, { useState, useEffect } from 'react';
import SideMenu from './SideMenu';
import Outlines from './Outlines';
import { RiGithubFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';

export default function SMIcons() {
	return (
		<div className='icons-div'>
			<RiGithubFill
				className='icon'
				onClick={() => {
					open('https://github.com/ChiKonstantin');
				}}
			/>

			<RiLinkedinBoxFill
				className='icon'
				onClick={() => {
					open('https://www.linkedin.com/in/kbalakirev');
				}}
			/>
		</div>
	);
}
