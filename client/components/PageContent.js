import React, { useState, useEffect } from 'react';

export default function PageContent(props) {
	return (
		<div className='page-content'>
			page content
			<div className='content-window'>
				arrow left
				<img src='https://media.gq.com/photos/5b6b20e3a3a1320b7280f029/16:9/w_1600/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_07.jpg' />
				<img src='https://architecturesideas.com/wp-content/uploads/2018/02/modern-architecture-buildings-9.jpg' />
				<img src='https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2400/hyowdxuvgsqzb4ngaqgq.jpg' />
				arrow right
			</div>
			<div className='content-navigation'>CONTENT NAVIGATION</div>
		</div>
	);
}
