import React, { useState, useEffect } from 'react';
import SideMenu from './SideMenu';
import Outlines from './Outlines';
import { RiGithubFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';

export default function SiteOverlay() {
	return (
		<div id='overlay-page'>
			<div className='side-menu-spacer'>
				<SideMenu />
				<Outlines />
			</div>
			<div className='content-2'>
				<div className='icons-div'>
					<RiGithubFill />
					<RiLinkedinBoxFill />
				</div>
			</div>
		</div>
	);
}
