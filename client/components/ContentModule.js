import React, { useState, useEffect } from 'react';

export default function ContentModule(props) {
	const image = props.data.imageUrl;
	const textArr = props.data.subsectionText;

	if (props.data === 'none') {
		return <div className='content-module'></div>;
	} else {
		return (
			<div
				className='content-module'
				style={{
					backgroundImage: `url("${image}")`,
				}}
			>
				{textArr.map((text) => (
					<div
						className='content-module-text'
						style={{
							fontSize: text.size,
							color: text.color,
							textAlign: text.align,
							fontFamily: text.font,
						}}
					>
						{text.text}
					</div>
				))}
			</div>
		);
	}
}
