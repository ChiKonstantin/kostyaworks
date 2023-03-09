import React, { useState, useEffect } from 'react';

export default function ContentModule(props) {
	return (
		<div
			className='content-module'
			style={{
				backgroundImage: `url("${props.imageUrl}")`,
			}}
		>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
