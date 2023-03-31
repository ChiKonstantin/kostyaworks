import React, { useState, useEffect } from 'react';

export function TestComponent() {
	return <div className='mc-center'>Lorem ipsum and so on and so forth.</div>;
}

export function BlankComponent() {
	return <div></div>;
}

export function JourneyQuote() {
	return (
		<div className='mc-center'>
			<span className='large purple'>
				"Nothing behind me,
				<br /> everything ahead of me,
				<br /> as is ever so on the road."
			</span>
			<br />

			<span className='purple'>Jack Kerouac</span>
		</div>
	);
}

export function JourneyColors() {
	return (
		<div className='mc-center'>
			<span id='colors' className='x-large'>
				COLORS
			</span>
		</div>
	);
}

export function JourneySpaces() {
	return (
		<div className='mc-center'>
			<span id='spaces' className='x-large'>
				SPACES
				<br /> SPACES
				<br /> SPACES
			</span>
		</div>
	);
}

export function JourneyNumbers() {
	return (
		<div className='mc-center'>
			<div id='numbers' className='large'>
				N+uM.b*e^R-s
			</div>
		</div>
	);
}

export function JourneyPlaces() {
	return (
		<div className='mc-center'>
			<div id='places' className='large'>
				PLACES
			</div>
		</div>
	);
}

export function MotivationQuote() {
	return (
		<div className='mc-center'>
			<span className='large yellow'>
				"We are here on Earth to fart around. <br /> Don't let anybody tell you
				any different."
			</span>
			<br />

			<span className='yellow'>Kurt Vonnegut</span>
		</div>
	);
}

export function Molbert() {
	return (
		<div className='mc-center'>
			<div
				className='photo-center'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/molbert.png)',
				}}
			></div>
		</div>
	);
}

export function DaVinciPic() {
	return (
		<div className='mc-center'>
			<div
				className='photo-center'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/davinci.png)',
				}}
			></div>
		</div>
	);
}

export function StampPic() {
	return (
		<div className='mc-center'>
			<div
				id='stamp-pic'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/stamp.png)',
				}}
			></div>
		</div>
	);
}

export function CanoePic() {
	return (
		<div className='mc-center'>
			<div
				className='photo-center'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/canoe01.png)',
				}}
			></div>
		</div>
	);
}

export function BridgePic() {
	return (
		<div className='mc-center'>
			<div
				className='photo-center'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/bridge.png)',
				}}
			></div>
		</div>
	);
}
export function BuildingPic() {
	return (
		<div className='mc-center'>
			<div
				id='building-pic'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/building.png)',
				}}
			></div>
		</div>
	);
}

export function ArtWall() {
	return (
		// <div className='mc-center'>
		<div id='art-wall'></div>
		// </div>
	);
}

export function CanoeSplit() {
	return (
		<div className='mc-center'>
			<div
				className='photo-center'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/canoe-split.png)',
				}}
			></div>
		</div>
	);
}

export function Graduation() {
	return (
		<div className='mc-center'>
			<div
				className='photo-center'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/graduation.png)',
				}}
			></div>
		</div>
	);
}

export function KSS() {
	return (
		<div className='mc-center'>
			<div
				className='photo-center'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/kss.png)',
				}}
			></div>
		</div>
	);
}

export function EY() {
	return (
		<div className='mc-center'>
			<div
				className='photo-center'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/ey.png)',
				}}
			></div>
		</div>
	);
}

export function Samarkand() {
	return (
		<div className='mc-center'>
			<div
				className='photo-center'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/samarkand.png)',
				}}
			></div>
		</div>
	);
}

export function Falcon() {
	return (
		<div className='mc-center'>
			<div
				className='photo-center'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/falcon.png)',
				}}
			></div>
		</div>
	);
}

export function FSDiploma() {
	return (
		<div className='mc-center'>
			<div
				id='diploma-pic'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/journey/diploma-web.png)',
				}}
			></div>
		</div>
	);
}

export function BuildingsBCM() {
	return (
		// <div className='mc-center'>
		<div id='buildings-wall'></div>
		// </div>
	);
}
