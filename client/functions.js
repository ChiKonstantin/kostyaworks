export function moveBarOnScroll() {
	let selectBar = document.getElementById('menu-select-bar');
	let sideMenu = document.getElementById('side-menu');

	let sideMenuStyle = document.defaultView.getComputedStyle(sideMenu);

	const scrollPosition = document.documentElement.scrollTop;
	const screenHeight = window.innerHeight;

	const scrollRatio =
		(scrollPosition / (screenHeight * 4)) * parseInt(sideMenuStyle.height);

	selectBar.style.top = `${70 + scrollRatio}px`;
}
