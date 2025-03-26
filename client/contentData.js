import React, { useState, useEffect } from 'react';

import {
	BlankComponent,
	TestComponent,
	JourneyQuote,
	MotivationQuote,
	StampPic,
	BuildingPic,
	ArtWall,
	FSDiploma,
	BuildingsBCM,
	IoCardPic,
	CenterPhoto,
	TextComponent,
	MultimediaDefinition,
	VonnegutQuote,
	SoundText,
	SoundClips,
	VideoClips,
	IronyMan,
	Cringe,
	CaptionPicture,
	LinkComponent,
	GoToSection,
	Summary,
	WelcomeOne,
	WelcomeTwo,
	WelcomeThree,
	TextOverImage,
	Paragraphs,
	List,
	ProductsContents,
} from './components/Contents';

export const journeyData = [
	{
		navAreaName: 'START',
		sections: [
			{
				imageUrl: '',
				subsections: [<JourneyQuote />],
			},
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/art%20school%20cover.png',
				backgroundColor: 'rgba(0, 0, 0, 0)',
				subsections: [
					<TextComponent
						text={'ART SCHOOL'}
						size={'50px'}
						color={'white'}
						backgroundColor={'black'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.25)',
				subsections: [
					<CenterPhoto
						//MOLBERT
						image={
							'https://storage.googleapis.com/kostya-works-public/design/journey/molbert.png'
						}
						text={'Painting "en plein air".'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
					<CenterPhoto
						//DAVINCI
						image={
							'https://storage.googleapis.com/kostya-works-public/design/journey/davinci.png'
						}
						text={'Painting on walls.'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
					// <DaVinciPic />,
				],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				subsections: [<ArtWall />],
			},
			{
				imageUrl: '',
				subsections: [
					<TextComponent
						text={'One of my works on a real postal stamp:'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},

			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/envelope-center.png',
				// backgroundColor: 'rgba(0, 0, 0, 0.25)',
				subsections: [<StampPic />],
			},
		],
	},
	{
		navAreaName: 'STUDIES',
		sections: [
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/college%20cover%20small.png',
				backgroundColor: 'rgba(0, 0, 0, 0)',
				subsections: [
					<TextComponent
						text={'UNIVERSITY'}
						size={'50px'}
						color={'white'}
						backgroundColor={'black'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
					// <TextComponent
					// 	text={'Reading lots of books.'}
					// 	size={'xx-large'}
					// 	color={'white'}
					// 	backgroundColor={'black'}
					// 	xAlign={'center'}
					// 	yAlign={'center'}
					// />,
				],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.25)',
				subsections: [
					<CenterPhoto
						// BRIDGE
						image={
							'https://storage.googleapis.com/kostya-works-public/design/journey/bridge.png'
						}
						text={'Building a steel bridge for a student competition.'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
					<CenterPhoto
						// CANOE
						image={
							'https://storage.googleapis.com/kostya-works-public/design/journey/canoe01.png'
						}
						text={'Building a canoe for a student competition.'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
					<CenterPhoto
						// CANOE SPLIT
						image={
							'https://storage.googleapis.com/kostya-works-public/design/journey/canoe-split.png'
						}
						text={'A canoe made out of concrete.'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/buildings-background-center.png',
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				subsections: [
					<TextComponent
						text={'Designing a building.'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'black'}
						xAlign={'center'}
						yAlign={'center'}
					/>,

					<BuildingPic />,
				],
			},
			// {
			// 	imageUrl: '',
			// 	backgroundColor: 'rgba(0, 0, 0, 0.3)',
			// 	subsections: [
			// 		<CenterPhoto
			// 			// GRADUATION
			// 			image={
			// 				'https://storage.googleapis.com/kostya-works-public/design/journey/graduation.png'
			// 			}
			// 			text={''}
			// 			size={'xx-large'}
			// 			color={'white'}
			// 			backgroundColor={'rgba(0, 0, 0, 0.85)'}
			// 			xAlign={'start'}
			// 			yAlign={'start'}
			// 		/>,
			// 	],
			// },
		],
	},
	{
		navAreaName: 'WORK',
		sections: [
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/work%20cover%20small.png',
				backgroundColor: 'rgba(0, 0, 0, 0)',
				subsections: [
					<TextComponent
						text={'WORK'}
						size={'50px'}
						color={'white'}
						backgroundColor={'black'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.25)',
				subsections: [
					<CenterPhoto
						// KSS
						image={
							'https://storage.googleapis.com/kostya-works-public/design/journey/kss.png'
						}
						text={'Building a gas refinery.'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'start'}
					/>,
					<CenterPhoto
						// EY
						image={
							'https://storage.googleapis.com/kostya-works-public/design/journey/ey.png'
						}
						text={`Then counting other people's money.`}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/industry%20wall.png',
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				subsections: [
					<TextComponent
						text={'Traveling all over.'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'black'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
					<CenterPhoto
						// SAMARKAND
						image={
							'https://storage.googleapis.com/kostya-works-public/design/journey/samarkand.png'
						}
						text={'Sometimes traveling to cool places.'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
					<CenterPhoto
						// FALCON
						image={
							'https://storage.googleapis.com/kostya-works-public/design/journey/falcon.png'
						}
						text={'Sometimes seeing cool things.'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},

			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.25)',
				subsections: [<BuildingsBCM />],
			},
		],
	},
	{
		navAreaName: 'CODING',
		sections: [
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/coding-cover.png',
				backgroundColor: 'rgba(0, 0, 0, 0)',
				subsections: [
					<TextComponent
						text={'CODING'}
						size={'50px'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},
			{
				imageUrl: '',

				subsections: [
					<TextComponent
						text={'Completing a coding bootcamp.'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},
			{ backgroundColor: 'rgba(0, 0, 0, 0.25)', subsections: [<FSDiploma />] },
			{
				subsections: [
					<GoToSection
						text={'Building cool things:'}
						size={'40px'}
						color={'#005dff'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
						location={1}
					/>,
				],
			},
		],
	},
];

export const productsData = [
	{
		navAreaName: 'CONTENTS',
		sections: [{ subsections: [<ProductsContents />] }],
	},

	{
		navAreaName: 'CHATATOR',

		sections: [
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/products/chatator/chatator%20wall.png',
				subsections: [
					<Paragraphs
						text={['CHATATOR', 'a messenger that translates.']}
						size={'50px'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
					<Paragraphs
						image='https://storage.googleapis.com/kostya-works-public/design/summary/corkboard_n.png'
						text={[
							'Overview:',
							'Sole developer: ideation, design, front and back end.',
						]}
						size={'xx-large'}
						color={'black'}
						backgroundColor={'rgb(253, 240, 147)'}
						xAlign={'center'}
						yAlign={'center'}
						textAlign={'left'}
					/>,
				],
			},
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/products/chatator/rainy%20glass%20wall.png',
				backgroundColor: 'rgba(0, 0, 0, 0.60)',

				subsections: [
					<Paragraphs
						image=''
						text={[
							'My wife and my mother had a communication problem. ',
							'Not because they don’t get along. No.',

							`They simply can't speak each other’s language. Literally. And they live in different countries.`,
							'So why isn’t there a messenger that instantly translates the texts?',
						]}
						size={'x-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
						textAlign={'left'}
					/>,
				],
			},
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/products/chatator/lighbulb%20senter.png',
				backgroundColor: 'rgba(255, 255, 255, 0.60)',
				subsections: [
					<Paragraphs
						text={['I can build one!']}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.95)'}
						xAlign={'center'}
						yAlign={'center'}
						textAlign={'center'}
					/>,
				],
			},
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/products/chatator/think%20cloud.png',
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				subsections: [
					<Paragraphs
						image={
							'https://storage.googleapis.com/kostya-works-public/design/summary/whiteboard.png'
						}
						text={[
							'1. It will be a web app.',
							`2. I can simply use any translation API to translate the messages in real time, if users indicate their preferred languages.`,
							`3. Websocket protocol can be used to push messages to each user.`,
							`4. A room setup similar to what is used by Zoom will work for any number of users (as a bonus: no need for signup).`,
						]}
						size={'x-large'}
						color={'black'}
						backgroundColor={'rgba(255, 255, 255, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
						textAlign={'left'}
					/>,
					<Paragraphs
						text={[
							'The name?',
							'A portmanteau of “chat” and “translator”: Chatator.',
						]}
						size={'xx-large'}
						color={'black'}
						backgroundColor={'rgba(255, 255, 255, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
						textAlign={'center'}
					/>,
					<Paragraphs
						text={[
							`Sounds like “potato”.`,
							`It’s got a fun feel to it and it's easy to remember.`,
						]}
						size={'xx-large'}
						color={'black'}
						backgroundColor={'rgba(255, 255, 255, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
						textAlign={'center'}
					/>,
					<Paragraphs
						image={
							'https://storage.googleapis.com/kostya-works-public/design/products/chatator/potato%20center.png'
						}
						text={[]}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
						textAlign={'left'}
					/>,
				],
			},

			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/products/chatator/chatator%20concept%20wall.png',
				backgroundColor: '',

				subsections: [
					<Paragraphs
						image={''}
						text={[
							'Key decisions:',
							`1. Message bubbles do look like small colorful potatoes.`,
							`2. Sending messages is like tossing small text potatoes to each other.`,
							`3. Potatoes come in a variety of colors - instantly giving a design inspiration.`,
						]}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
						textAlign={'left'}
					/>,
					<Paragraphs
						image={''}
						text={[
							`4. The interface will follow an intuitive messenger layout.`,
							`5. No sign up needed: room system.`,
							`6. Each message can be expanded to see the original language.`,
						]}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
						textAlign={'left'}
					/>,
					<BlankComponent />,
				],
			},
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/products/chatator/chatator%20screenshot.png',
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				subsections: [
					<Paragraphs
						image={''}
						text={['Voilà!', 'A simple and practical app.']}
						size={'40px'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
						textAlign={'center'}
					/>,
					<BlankComponent />,
				],
			},

			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/summary/whiteboard_n.png',
				backgroundColor: 'rgba(224, 170, 177, 0.438)',
				subsections: [
					<Paragraphs
						text={[
							`Takeaways:`,
							`💸To have a dedicated chat channel just for my family I could use Google's translation API - and pay for it, but free translation API’s that could translate well enough are hard to find, making scaling challenging. `,
							`🤨 Websockets could be unreliable and cumbersome to implement. I used the Socket.io library which made implementation a little easier.`,
							`✅ I did learn a significant amount about chat interface and functionality which I used in my later projects.`,
						]}
						size={'x-large'}
						color={'darkblue'}
						backgroundColor={'rgba(255, 255, 255, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
						textAlign={'left'}
					/>,
					<Paragraphs
						text={[
							`Technicalities:`,
							`👤 Sole developer and designer.`,
							`⚛️ React/Redux on the front end. I used Paint.Net for sketching and initial design ideas.`,
							`⚙️ Back end was built with Node.js with the help of Express.js framework.`,
							`💾 No databases were used for privacy reasons and honestly to simplify and get the project done, a trade off is a fleeting nature of chats.`,
						]}
						size={'x-large'}
						color={'darkblue'}
						backgroundColor={'rgba(255, 255, 255, 0.85)'}
						xAlign={'center'}
						yAlign={'center'}
						textAlign={'left'}
					/>,
				],
			},
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/products/chatator%20cover.png',
				backgroundColor: 'rgba(0, 0, 0, 0)',
				subsections: [
					<LinkComponent
						text={'Try CHATATOR'}
						link={'http://www.chatator.com/'}
						size={'40px'}
						color={'rgb(221, 101, 83)'}
						backgroundColor={'black'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},
		],
	},
	// {
	// 	navAreaName: 'PANDEMIC',
	// 	sections: [
	// 		{
	// 			imageUrl:
	// 				'https://storage.googleapis.com/kostya-works-public/design/products/pandemic%20cover.png',
	// 			subsections: [
	// 				<TextComponent
	// 					text={'PANDEMIC BEAT'}
	// 					size={'50px'}
	// 					color={'white'}
	// 					backgroundColor={'rgba(0, 0, 0, 0.85)'}
	// 					xAlign={'center'}
	// 					yAlign={'center'}
	// 				/>,
	// 			],
	// 		},
	// 		{
	// 			imageUrl:
	// 				'https://storage.googleapis.com/kostya-works-public/design/products/pandemic-phone.png',
	// 			backgroundColor: 'rgba(0, 0, 0, 0.25)',
	// 			transition: 0,
	// 			subsections: [
	// 				<TextComponent
	// 					text={`Pandemic-beat let's you listen to COVID pandemic data converted to soundfiles.`}
	// 					size={'x-large'}
	// 					color={'black'}
	// 					backgroundColor={'rgba(255, 255, 255, 0.7)'}
	// 					xAlign={'end'}
	// 					yAlign={'center'}
	// 				/>,
	// 				<TextComponent
	// 					text={`I wrote code to convert COVID-19 graphs into audio files after noticing how the graphs resembled sound waves.`}
	// 					size={'x-large'}
	// 					color={'black'}
	// 					backgroundColor={'rgba(255, 255, 255, 0.7)'}
	// 					xAlign={'end'}
	// 					yAlign={'center'}
	// 				/>,
	// 			],
	// 		},
	// 		{
	// 			imageUrl:
	// 				'https://storage.googleapis.com/kostya-works-public/design/products/pandemic-phone-i.png',
	// 			backgroundColor: 'rgba(0, 0, 0, 0.25)',
	// 			transition: 0,
	// 			subsections: [
	// 				<TextComponent
	// 					text={`Two sets of sound files: new recorded daily cases.`}
	// 					size={'x-large'}
	// 					color={'black'}
	// 					backgroundColor={'rgba(255, 255, 255, 0.7)'}
	// 					xAlign={'end'}
	// 					yAlign={'center'}
	// 				/>,
	// 			],
	// 		},
	// 		{
	// 			imageUrl:
	// 				'https://storage.googleapis.com/kostya-works-public/design/products/pandemic-phone-d.png',
	// 			backgroundColor: 'rgba(0, 0, 0, 0.25)',
	// 			transition: 0,
	// 			subsections: [
	// 				<TextComponent
	// 					text={`And daily deceased cases.`}
	// 					size={'x-large'}
	// 					color={'black'}
	// 					backgroundColor={'rgba(255, 255, 255, 0.7)'}
	// 					xAlign={'end'}
	// 					yAlign={'center'}
	// 				/>,
	// 			],
	// 		},
	// 		{
	// 			imageUrl:
	// 				'https://storage.googleapis.com/kostya-works-public/design/products/pandemic-phone-search.png',
	// 			backgroundColor: 'rgba(0, 0, 0, 0.25)',
	// 			transition: 0,
	// 			subsections: [
	// 				<TextComponent
	// 					text={'Search bar to find indiviudal countries.'}
	// 					size={'x-large'}
	// 					color={'black'}
	// 					backgroundColor={'rgba(255, 255, 255, 0.7)'}
	// 					xAlign={'end'}
	// 					yAlign={'center'}
	// 				/>,
	// 			],
	// 		},
	// 		{
	// 			backgroundColor: 'rgba(0, 0, 0, 0)',
	// 			transition: 0.25,
	// 			subsections: [
	// 				<LinkComponent
	// 					text={'TRY PANDEMIC BEAT'}
	// 					link={'http://www.pandemic.kostya.works/'}
	// 					size={'40px'}
	// 					color={'rgb(120, 219, 69)'}
	// 					backgroundColor={'black'}
	// 					xAlign={'center'}
	// 					yAlign={'center'}
	// 				/>,
	// 				<GoToSection
	// 					text={'Other interests:'}
	// 					size={'40px'}
	// 					color={'#b200ff'}
	// 					backgroundColor={'rgba(0, 0, 0, 0.85)'}
	// 					xAlign={'center'}
	// 					yAlign={'center'}
	// 					location={2}
	// 				/>,
	// 			],
	// 		},
	// 	],
	// },
	// {
	// 	navAreaName: 'KOSTYA.works',
	// 	sections: [
	// 		{
	// 			imageUrl:
	// 				'https://storage.googleapis.com/kostya-works-public/design/products/kostya%20works%20cover.png',
	// 			subsections: [
	// 				<TextComponent
	// 					text={'KOSTYA.WORKS'}
	// 					size={'50px'}
	// 					color={'white'}
	// 					backgroundColor={'rgba(0, 0, 0, 0.85)'}
	// 					xAlign={'center'}
	// 					yAlign={'center'}
	// 				/>,
	// 			],
	// 		},
	// 	],
	// },
	// {
	// 	navAreaName: 'NOUGAT.news',
	// 	sections: [
	// 		{
	// 			sectionName: 'NOUGAT NEWS',
	// 			imageUrl:
	// 				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8cPYVlnfnfeApLXctxsPUQHaFj%26pid%3DApi&f=1&ipt=f56fd79f7fb63f050947819d7f9ebea4febe5548a38e6bcf014a18d5fc45141c&ipo=images',
	// 			subsections: [<TestComponent />, <TestComponent />],
	// 		},
	// 	],
	// },
];

export const motivationData = [
	{
		navAreaName: 'SOUND',
		sections: [
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/interests/sound-wave.png',
				backgroundColor: 'rgba(0, 0, 0, 0)',
				subsections: [
					<TextComponent
						text={'SOUND'}
						size={'50px'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.8)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0)',
				subsections: [
					// <TextComponent
					// 	text={'Some of my instruments:'}
					// 	size={'xx-large'}
					// 	color={'white'}
					// 	backgroundColor={'rgba(0, 0, 0, 0.8)'}
					// 	xAlign={'center'}
					// 	yAlign={'center'}
					// />,
					<TextComponent
						text={'Some of my sounds:'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.8)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				subsections: [<SoundClips />],
			},
		],
	},
	{
		navAreaName: 'VIDEO',

		sections: [
			{
				imageUrl: '',
				video:
					'https://storage.googleapis.com/kostya-works-public/design/interests/video%20cover%20n.mov',
				backgroundColor: 'rgba(0, 0, 0, 0)',
				subsections: [
					<TextComponent
						text={'VIDEO'}
						size={'50px'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.8)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},
			{
				imageUrl: '',

				subsections: [
					<TextComponent
						text={'Some of my videos:'}
						size={'xx-large'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.8)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
				],
			},
			{ backgroundColor: 'rgba(0, 0, 0, 0.3)', subsections: [<VideoClips />] },
		],
	},
	// {
	// 	navAreaName: 'IMAGES',
	// 	sections: [
	// 		{
	// 			imageUrl:
	// 				'https://storage.googleapis.com/kostya-works-public/design/interests/images%20cover%20new.png',
	// 			backgroundColor: 'rgba(0, 0, 0, 0)',
	// 			subsections: [
	// 				<TextComponent
	// 					text={'IMAGES'}
	// 					size={'50px'}
	// 					color={'white'}
	// 					backgroundColor={'rgba(0, 0, 0, 0.95)'}
	// 					xAlign={'center'}
	// 					yAlign={'center'}
	// 				/>,
	// 			],
	// 		},
	// 		{
	// 			imageUrl: '',
	// 			backgroundColor: 'rgba(0, 0, 0, 0)',
	// 			subsections: [
	// 				<TextComponent
	// 					text={
	// 						'One 🖼️ is worth 💯+ 💯+ 💯+ 💯+ 💯+ 💯+ 💯+ 💯+ 💯+ 💯  words.'
	// 					}
	// 					size={'xx-large'}
	// 					color={'white'}
	// 					backgroundColor={'rgba(0, 0, 0, 0.8)'}
	// 					xAlign={'center'}
	// 					yAlign={'center'}
	// 				/>,
	// 				// <IoCardPic />,
	// 			],
	// 		},
	// 		{
	// 			imageUrl: '',
	// 			backgroundColor: 'rgba(0, 0, 0, 0.3)',
	// 			subsections: [
	// 				<CaptionPicture
	// 					// MAGPIE
	// 					id={'madigan-img'}
	// 					image={
	// 						'https://storage.googleapis.com/kostya-works-public/design/interests/madigan%20tenure_PNG.png'
	// 					}
	// 					text={
	// 						'Comparing tenure of people with power for my media project "The Magpie News".'
	// 					}
	// 					size={'large'}
	// 					color={'white'}
	// 					backgroundColor={'rgba(0, 0, 0, 0.85)'}
	// 				/>,
	// 				<CaptionPicture
	// 					// BLOG

	// 					id={'deforestation-img'}
	// 					image={
	// 						'https://storage.googleapis.com/kostya-works-public/design/interests/deforestation.png'
	// 					}
	// 					text={
	// 						'This illustration of illegal tree cutting at a park from investigation I did for my blog. It generated public awareness and ultimately forced the developer to plant more trees to compensate for damage.'
	// 					}
	// 					size={'medium'}
	// 					color={'white'}
	// 					backgroundColor={'rgba(0, 0, 0, 0.85)'}
	// 					imgWidth={'555px'}
	// 					imgHeight={'967px'}
	// 				/>,
	// 			],
	// 		},
	// 	],
	// },
	{
		navAreaName: 'HUMOR',
		sections: [
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/interests/curtain.png',
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				subsections: [
					<TextComponent
						text={'HUMOR'}
						size={'50px'}
						color={'white'}
						backgroundColor={'rgba(0, 0, 0, 0.8)'}
						xAlign={'center'}
						yAlign={'center'}
					/>,
					<VonnegutQuote />,
				],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				subsections: [
					<Cringe />,
					<IoCardPic />,
					<IronyMan />,
					// <TextComponent
					// 	text={`To sum it all up:`}
					// 	size={'xx-large'}
					// 	color={'white'}
					// 	backgroundColor={'rgba(0, 0, 0, 0.8)'}
					// 	xAlign={'center'}
					// 	yAlign={'center'}
					// />,
				],
			},
			// {
			// 	subsections: [
			// 		<GoToSection
			// 			text={'To sum it all up:'}
			// 			size={'40px'}
			// 			color={'rgb(255, 81, 68)'}
			// 			backgroundColor={'rgba(0, 0, 0, 0.85)'}
			// 			xAlign={'center'}
			// 			yAlign={'center'}
			// 			location={3}
			// 		/>,
			// 	],
			// },
		],
	},
];

export const summaryData = [
	{
		navAreaName: 'WELCOME',
		sections: [
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/summary/whiteboard_n.png',
				subsections: [<WelcomeOne />],
			},
		],
	},
	{
		navAreaName: 'ABOUT',
		sections: [
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/summary/pegboard_dark_n.png',
				subsections: [<WelcomeTwo />],
			},
		],
	},
	{
		navAreaName: 'MORE',
		sections: [
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/summary/corkboard_n.png',
				subsections: [<WelcomeThree />],
			},
		],
	},
];
