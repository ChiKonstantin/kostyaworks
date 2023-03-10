import React, { useState, useEffect } from 'react';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

export default function NavMarker(props) {
	return (
		<div className='nav-wrapper'>
			<div className='nav-checkbox-empty'>
				<RiCheckboxBlankCircleFill />
			</div>
			<div className='nav-spacer'></div>
			<div className='nav-text'>{props.text}</div>
		</div>
	);
}
