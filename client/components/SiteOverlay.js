import React, { useState, useEffect } from 'react';
import SideMenu from './SideMenu';

export default function SiteOverlay() {
	return (
		<div id='site-overlay'>
			<div className='side-menu-space'>
				<SideMenu />
			</div>
			<div className='content'></div>
		</div>
	);
}
