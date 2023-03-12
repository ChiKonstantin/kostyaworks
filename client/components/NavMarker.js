import React, { useState, useEffect } from 'react';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

export default function NavMarker(props) {
	// function to activate current nav

	let navClass = '';
	if (props.index === props.activeNav) {
		navClass = `nav-wrapper nav-active`;
	} else {
		navClass = 'nav-wrapper';
	}

	return (
		<div className={navClass}>
			<div className='nav-checkbox-empty'>
				<RiCheckboxBlankCircleFill />
			</div>
			<div className='nav-spacer'></div>
			<div className='nav-text'>{props.text}</div>
		</div>
	);
}
