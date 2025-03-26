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
			<p
				className='text'
				style={{
					fontSize: props.size,
					textAlign: props.textAlign,
					// color: props.color,
					// backgroundColor: props.backgroundColor,
				}}
			>
				<mark
					style={{
						color: props.color,
						backgroundColor: props.backgroundColor,
						// borderRadius: '5px',
						padding: '0 4px',
					}}
				>
					{props.text}
				</mark>
			</p>
		</div>
	);
}

export function Paragraphs(props) {
	return (
		<div
			className='mc-center'
			style={{
				justifyContent: props.xAlign,
				alignItems: props.yAlign,
				textAlign: 'left',
				backgroundImage: `url(${props.image})`,
			}}
		>
			<div className='text'>
				{props.text.map((item) => {
					return (
						<p
							style={{
								fontSize: props.size,
								textAlign: props.textAlign,
							}}
						>
							<mark
								style={{
									color: props.color,
									backgroundColor: props.backgroundColor,
									// borderRadius: '5px',
									padding: '0 4px',
								}}
							>
								{item}
							</mark>
						</p>
					);
				})}
			</div>
		</div>
	);
}

export function List(props) {
	return (
		<div
			className='mc-center'
			style={{
				justifyContent: props.xAlign,
				alignItems: props.yAlign,
				textAlign: 'left',
				backgroundImage: `url(${props.image})`,
			}}
		>
			<ul className='text'>
				{props.text.map((item) => {
					return (
						<li
							style={{
								fontSize: props.size,
								textAlign: props.textAlign,
							}}
						>
							<mark
								style={{
									color: props.color,
									backgroundColor: props.backgroundColor,
									// borderRadius: '5px',
									padding: '0 4px',
								}}
							>
								{item}
							</mark>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export function HTMLComponent(props) {
	return (
		<div
			className='mc-center'
			style={{ justifyContent: props.xAlign, alignItems: props.yAlign }}
		>
			<div
				// className='text'
				// style={{
				// 	fontSize: props.size,
				// 	// textAlign: props.textAlign,
				// 	color: props.color,
				// 	backgroundColor: props.backgroundColor,
				// }}
				dangerouslySetInnerHTML={props.text}
			>
				{/* {props.text} */}
			</div>
			{/* </p> */}
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
export function TextOverImage(props) {
	return (
		<div
			className='mc-center'
			style={{
				backgroundImage: `url(${props.image})`,
				// backgroundSize: 'contain',
				// backgroundPositionX: 'center',
				// backgroundPositionY: 'center',
				// backgroundRepeat: 'no-repeat',
			}}
		>
			<p
				className='text'
				style={{
					fontSize: props.size,
					textAlign: props.textAlign,
				}}
			>
				<mark
					style={{
						color: props.color,
						backgroundColor: props.backgroundColor,
					}}
				>
					{props.text}
				</mark>
			</p>
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

export function WelcomeOne() {
	function menuScroll(location) {
		const screenHeight = window.innerHeight;
		window.scrollTo({
			top: screenHeight * location,
			behavior: 'smooth',
		});
	}
	return (
		<div className='mc-center  welcome'>
			<div className='summary-div'>
				{/* <div id='name-div'>
					<img src='kostya_profile.png' id='profile-pic'></img>
					<a href='https://www.linkedin.com/in/kbalakirev/' target='_blank'>
						<div id='name'>Kostya Balakirev</div>
					</a>
				</div> */}

				<span>
					<p>
						<span className='welcome-one-spans'>Hello!</span>
					</p>
					<p>
						<span className='welcome-one-spans'>
							I am surprised you found your way to my portfolio site. Yet you
							did, and here you are. So welcome!
						</span>
					</p>
					<p>
						<span className='welcome-one-spans'>
							This site has things you can click on and scroll and swipe. Some
							things move up and down, and fade in and out - it is to impress
							you.
						</span>
					</p>
					<p>
						<span className='welcome-one-spans'>
							This site has four sections:
						</span>
					</p>
					<p>
						<span
							className='section-clickable'
							style={{
								backgroundColor: 'rgba(0, 0, 0, 0.9)',
								color: ' rgb(255, 81, 68)',
							}}
						>
							WELCOME{' '}
						</span>{' '}
						– <span className='welcome-one-spans'>You’re here.</span> <br />
						<span
							className='section-clickable'
							style={{
								backgroundColor: 'rgba(0, 0, 0, 0.9)',
								color: '#005dff',
							}}
							onClick={() => {
								menuScroll(1);
							}}
						>
							PRODUCTS
						</span>{' '}
						–{' '}
						<span className='welcome-one-spans'>
							Some things I worked on and want you to see.
						</span>{' '}
						<br />
						<span
							className='section-clickable'
							style={{
								backgroundColor: 'rgba(0, 0, 0, 0.9)',
								color: '#b200ff',
							}}
							onClick={() => {
								menuScroll(2);
							}}
						>
							INTERESTS
						</span>{' '}
						–{' '}
						<span className='welcome-one-spans'>
							Other things I enjoy doing.
						</span>{' '}
						<br />
						<span
							className='section-clickable'
							style={{
								backgroundColor: 'rgba(0, 0, 0, 0.9)',
								color: '#ffd800',
							}}
							onClick={() => {
								menuScroll(3);
							}}
						>
							JOURNEY
						</span>{' '}
						–{' '}
						<span className='welcome-one-spans'>
							The bio, the origins, the B-side, the gossip.
						</span>
					</p>

					<p>
						<span className='welcome-one-spans'>
							I hope you like it! I like it...
						</span>
					</p>
				</span>
			</div>
		</div>
	);
}

export function WelcomeTwo() {
	return (
		<div className='mc-center  welcome'>
			<div className='summary-div'>
				{/* <div id='name-div'>
					<img src='kostya_profile.png' id='profile-pic'></img>
					<a href='https://www.linkedin.com/in/kbalakirev/' target='_blank'>
						<div id='name'>Kostya Balakirev</div>
					</a>
				</div> */}

				<p>
					<span className='welcome-two-spans'>Now a bit about me:</span>
				</p>
				<p>
					<span className='welcome-two-spans'>
						My name is Kostya, it is short for Konstantin. I am an American, but
						was born in a different country, hence the name.
					</span>
				</p>
				<p>
					<span className='welcome-two-spans'>
						I can do many things decently, but I like creating things the best.
					</span>
				</p>
				<p>
					<span className='welcome-two-spans'>
						I particularly like when things look good, work smoothly and make
						overall sense.
					</span>
				</p>
				<p>
					<span className='welcome-two-spans'>
						I prefer working with a group of intelligent people who also want to
						build or improve things and make money in the process.
					</span>
				</p>
				<p>
					<span className='welcome-two-spans'>
						If you are looking to offer me a job, I think it is a great idea and
						it will be good for both of us. And for the world...
					</span>
				</p>
			</div>
		</div>
	);
}

export function WelcomeThree() {
	return (
		<div className='mc-center welcome'>
			<div className='summary-div'>
				{/* <div id='name-div'>
					<img src='kostya_profile.png' id='profile-pic'></img>
					<a href='https://www.linkedin.com/in/kbalakirev/' target='_blank'>
						<div id='name'>Kostya Balakirev</div>
					</a>
				</div> */}

				<p>
					<span className='welcome-three-spans'>What else…</span>
				</p>
				<p>
					<span className='welcome-three-spans'>
						+ Experimenting, learning and questioning is good in my opinion.
						Most recently I have been playing with OpenAI APIs.
					</span>
				</p>

				<p>
					<span className='welcome-three-spans'>
						+ I wanted to be an architect but studied engineering and worked as
						an analyst in finance. I am also a husband and a dad.
					</span>
				</p>

				<p>
					<span className='welcome-three-spans'>
						+ For collaborations or job opportunities, please contact me via{' '}
						<a
							className='section-clickable'
							vhref='https://www.linkedin.com/in/kbalakirev/'
							target='_blank'
						>
							LinkedIn.
						</a>
					</span>
				</p>
				<p>
					<span className='welcome-three-spans'>
						Again, it is crazy that you found this site and read all of these
						words. Thank you!
					</span>
				</p>
				<p>
					<span className='welcome-three-spans'>Kostya BALAKIREV</span>
				</p>
			</div>
		</div>
	);
}

export function ProductsContents() {
	return (
		<div className='mc-center'>
			<div className='contents-div'>
				<p>NOTICE:</p>
				<p>These are the things I've worked on:</p>
				<ul>
					<li>
						✅ 🌐
						<a
							className='products'
							href='http://www.chatator.com/'
							target='_blank'
						>
							Chatator
						</a>
					</li>
					<li>
						⏳ 🌐
						<a
							className='products'
							href='http://www.pandemic.kostya.works/'
							target='_blank'
						>
							Pandemic Beat{' '}
						</a>
					</li>
					<li>
						📼
						<a
							className='products'
							href='https://youtu.be/X4i_PReaSVI'
							target='_blank'
						>
							{' '}
							Neighbor Fave{' '}
						</a>{' '}
					</li>
					<li>⏳ Aprix/Sentelex </li>
					<li>⏳ Nougat News </li>
					<li>⏳ Baby Shower Invite </li>
				</ul>

				<p>
					Some have been added to this site ✅. Some are being added ⏳. Some
					are live for you to use 🌐 or have a video 📼.{' '}
				</p>
				<p>P.S. Use the portfolio navigation below ⤵️</p>
			</div>
		</div>
	);
}
