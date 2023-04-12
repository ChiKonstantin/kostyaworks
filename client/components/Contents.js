import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaStop } from 'react-icons/fa';
import { GoPlay } from 'react-icons/fa';
import { FaStopCircle } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';

export function TestComponent() {
	return (
		<div className='mc-center'>
			<span className='medium-text'>Lorem ipsum and so on and so forth.</span>
		</div>
	);
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

export function MultimediaDefinition() {
	return (
		<div className='mc-center'>
			<span className='medium yellow'>
				"Multimedia <br /> is a technique <br /> for expressing ideas <br /> in
				which several media <br /> are employed."
			</span>
			<br />

			<span className='yellow'>Merriam-Webster</span>
		</div>
	);
}

export function VonnegutQuote() {
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
		<div className='mc-center'>
			<div id='art-wall'>
				<span
					className='text'
					style={{
						fontSize: 'xx-large',
						color: 'white',
						backgroundColor: 'rgba(0, 0, 0, 0.85)',
					}}
				>
					Painting a lot.
				</span>
			</div>
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
		<div className='mc-center'>
			<div id='buildings-wall'>
				<span
					className='text'
					style={{
						fontSize: 'xx-large',
						color: 'white',
						backgroundColor: 'rgba(0, 0, 0, 0.85)',
					}}
				>
					Then helping to develop housing.
				</span>
			</div>
		</div>
	);
}

export function Cringe() {
	return (
		<div className='mc-center'>
			<div
				id='baskets'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/interests/baskets.jpg)',
					border: '5px solid black;',
				}}
			></div>
			<br />
			<span
				className='text'
				style={{
					fontSize: 'xx-large',
					color: 'white',
					backgroundColor: 'rgba(0, 0, 0, 0.85)',
				}}
			>
				I am a cringe connoisseur,
			</span>
		</div>
	);
}

export function IoCardPic() {
	return (
		<div className='mc-center'>
			<div
				id='io-card-pic'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/interests/io%20card.png)',
				}}
			></div>
			<span
				className='text'
				style={{
					fontSize: 'xx-large',
					color: 'white',
					backgroundColor: 'rgba(0, 0, 0, 0.85)',
				}}
			>
				improv enthusiast,
			</span>
		</div>
	);
}

export function IronyMan() {
	return (
		<div className='mc-center'>
			<div
				id='irony-man'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/interests/irony%20man%20center.png)',
					// border: '5px solid black;',
				}}
			></div>
			<br />
			<span
				className='text'
				style={{
					fontSize: 'xx-large',
					color: 'white',
					backgroundColor: 'rgba(0, 0, 0, 0.85)',
				}}
			>
				and an irony man.
			</span>
		</div>
	);
}

export function TextComponent(props) {
	return (
		<div
			className='mc-center'
			style={{ justifyContent: props.xAlign, alignItems: props.yAlign }}
		>
			<span
				className='text'
				style={{
					fontSize: props.size,
					color: props.color,
					backgroundColor: props.backgroundColor,
				}}
			>
				{props.text}
			</span>
		</div>
	);
}

export function CenterPhoto(props) {
	return (
		<div className='mc-center'>
			<div
				className='photo-center'
				style={{
					backgroundImage: `url(${props.image})`,
					fontSize: props.size,
					color: props.color,
					justifyContent: props.xAlign,
					alignItems: props.yAlign,
					textAlign: props.yAlign,
				}}
			>
				<span style={{ backgroundColor: props.backgroundColor }}>
					{props.text}
				</span>
			</div>
		</div>
	);
}

export function CaptionPicture(props) {
	return (
		<div
			className='mc-center'
			style={{
				fontSize: props.size,
				color: props.color,
				gap: '15px',
			}}
		>
			<img
				id={props.id}
				src={props.image}
				style={{
					boxShadow: '1px 1px 5px black',
				}}
			/>
			<span
				className='caption-span'
				style={{ backgroundColor: props.backgroundColor }}
			>
				{props.text}
			</span>
		</div>
	);
}

export function SoundText(props) {
	return (
		<div className='mc-center'>
			<span
				className='text'
				style={{
					fontSize: props.size,
					color: 'white',
					backgroundColor: 'rgba(0, 0, 0, 0.85)',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				I use:
				<br />
				Mics,
				<br />
				Keyboards,
				<br />
				FLStudio,
				<br />
				Audacity.
			</span>
		</div>
	);
}

export function SoundClips() {
	const [playStatus, setPlayStatus] = useState({});

	function playAudio(audio) {
		if (!audio.paused) {
			audio.pause();
			audio.currentTime = 0;
		} else {
			audio.play();
		}
	}

	function stopAudio(audio) {
		audio.pause();
		audio.currentTime = 0;
	}

	function setPlay(event) {
		const audioClip = event.target.id;
		setPlayStatus((state) => ({
			...state,
			[audioClip]: 'PLAY',
		}));
	}

	function setStop(event) {
		const audioClip = event.target.id;
		setPlayStatus((state) => ({
			...state,
			[audioClip]: 'STOP',
		}));
	}

	function returnPlayStatus(clipName) {
		if (playStatus[clipName]) {
			return playStatus[clipName];
		} else {
			return 'PLAY';
		}
	}

	return (
		<div className='mc-center'>
			<audio
				id='audio1'
				onEnded={setPlay}
				onPause={setPlay}
				onPlaying={setStop}
			>
				<source
					src='https://storage.googleapis.com/kostya-works-public/design/interests/LOOKING%20FOR%20GOLD%205.mp3'
					type='audio/mpeg'
				/>
			</audio>
			<audio
				id='audio2'
				onEnded={setPlay}
				onPause={setPlay}
				onPlaying={setStop}
			>
				<source
					src='https://storage.googleapis.com/kostya-works-public/design/interests/Storm%20is%20ROcking_6_vocal%20correction.mp3'
					type='audio/mpeg'
				/>
			</audio>
			<audio
				id='audio3'
				onEnded={setPlay}
				onPause={setPlay}
				onPlaying={setStop}
			>
				<source
					src='https://storage.googleapis.com/kostya-works-public/design/interests/plugs.mp3'
					type='audio/mpeg'
				/>
			</audio>
			<div className='all-players'>
				<div className='player-wrapper'>
					<div className='player'>
						<div
							onClick={() => {
								const audio1 = document.getElementById('audio1');
								const audio2 = document.getElementById('audio2');
								const audio3 = document.getElementById('audio3');
								playAudio(audio1);
								stopAudio(audio2);
								stopAudio(audio3);
							}}
						>
							<div className='play-button'>{returnPlayStatus('audio1')}</div>
						</div>
					</div>
					<div className='clip-name'>Looking For Gold</div>
					{/* <div className='clip-description'>
						This song is called this and that and I composed it for this reason.
					</div> */}
				</div>
				<div className='player-wrapper'>
					<div className='player'>
						<div
							onClick={() => {
								const audio1 = document.getElementById('audio1');
								const audio2 = document.getElementById('audio2');
								const audio3 = document.getElementById('audio3');
								playAudio(audio2);
								stopAudio(audio1);
								stopAudio(audio3);
							}}
						>
							<div className='play-button'>{returnPlayStatus('audio2')}</div>
						</div>
					</div>
					<div className='clip-name'>Storm</div>
					{/* <div className='clip-description'>
						And whatever happens tonight, hope we laugh about it tomorrow.
					</div> */}
				</div>

				<div className='player-wrapper'>
					<div className='player'>
						<div
							// onClick={playAudio('audio1')}
							onClick={() => {
								const audio1 = document.getElementById('audio1');
								const audio2 = document.getElementById('audio2');
								const audio3 = document.getElementById('audio3');
								playAudio(audio3);
								stopAudio(audio1);
								stopAudio(audio2);
							}}
						>
							<div className='play-button'>{returnPlayStatus('audio3')}</div>
						</div>
					</div>
					<div className='clip-name'>Plug (for CBB Podcast) </div>
					{/* <div className='clip-description'>
						Featured on Comedy Bang-Bang: The Podcast.
					</div> */}
				</div>
			</div>
		</div>
	);
}

export function VideoClips() {
	return (
		<div className='mc-center'>
			<div className='videos-div'>
				{/* <span className='clip-description'>Video 1</span> */}

				<iframe
					className='videos-yt'
					// width='200'
					// height='112'
					src='https://www.youtube.com/embed/Rxlar2jopMU'
					frameborder='0'
					allowfullscreen
				></iframe>

				<iframe
					className='videos-yt'
					// width='200'
					// height='112'
					src='https://www.youtube.com/embed/FT_fj5AXIoA'
					frameborder='0'
					allowfullscreen
				></iframe>

				<iframe
					className='videos-yt'
					// width='200'
					// height='112'
					src='https://www.youtube.com/embed/LLgxuBqrxqg'
					frameborder='0'
					allowfullscreen
				></iframe>
			</div>
		</div>
	);
}

export function LinkComponent(props) {
	return (
		<div
			className='mc-center'
			style={{ justifyContent: props.xAlign, alignItems: props.yAlign }}
		>
			<div
				className='link'
				style={{
					fontSize: props.size,
					color: props.color,
					backgroundColor: props.backgroundColor,
				}}
				onClick={() => {
					open(`${props.link}`);
				}}
			>
				{props.text}
			</div>
		</div>
	);
}

export function GoToSection(props) {
	function menuScroll(location) {
		const screenHeight = window.innerHeight;
		window.scrollTo({
			top: screenHeight * location,
			behavior: 'smooth',
		});
	}
	return (
		<div className='mc-center'>
			<div
				className='link'
				style={{
					fontSize: props.size,
					color: props.color,
					backgroundColor: props.backgroundColor,
				}}
				onClick={() => {
					menuScroll(props.location);
				}}
			>
				{props.text}
			</div>
		</div>
	);
}

export function Summary() {
	return (
		<div className='mc-center'>
			<div id='summary-div'>
				{/* <div id='name-div'>
					<img src='kostya_profile.png' id='profile-pic'></img>
					<a href='https://www.linkedin.com/in/kbalakirev/' target='_blank'>
						<div id='name'>Kostya Balakirev</div>
					</a>
				</div> */}

				<div id='name-div'>
					<img src='kostya_profile.png' id='profile-pic'></img>
					<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
						Kostya Balakirev
					</div>
				</div>
				{/* <hr /> */}
				<p style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
					As you have probably already deduced I am a creative developer with an
					eye for design and a passion for understanding the world.
				</p>
				<p style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
					I am interested in web development projects involving creative digital
					media experiences and multimedia in general.
				</p>
				<p style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
					For collaborations, job and project proposals contact me via{' '}
					<a href='https://www.linkedin.com/in/kbalakirev/' target='_blank'>
						LinkedIn.
					</a>
				</p>
				<p
					style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', textAlign: 'center' }}
				>
					Cheers! 👋
				</p>
			</div>
		</div>
	);
}
