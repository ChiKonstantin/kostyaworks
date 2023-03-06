import React, { useState, useEffect } from 'react';
import SideMenu from './SideMenu';
import Outlines from './Outlines';
import { RiGithubFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';

export default function MenuArea() {
	return (
		<div className='side-menu-area'>
			<SideMenu />
			<Outlines />
		</div>
	);
}
