import React, { useState, useEffect } from 'react';

export function TestComponent() {
	return <div className='module-content-00'>This is some cool content.</div>;
}

export function BlankComponent() {
	return <div></div>;
}

export function JourneyQuote() {
	return (
		<div className='module-content-center-quote'>
			<span className='text-quote'>
				"We are here on Earth to fart around. <br /> Don't let anybody tell you
				any different."
			</span>
			<br />

			<span className='text-quote-author'>Kurt Vonnegut</span>
		</div>
	);
}
