function showhome() {
	document.getElementById('home').style.display = 'flex';
	document.getElementById('history').style.display = 'none';
}

function showHistory() {
	document.getElementById('home').style.display = 'none';
	document.getElementById('history').style.display = 'flex';
}

function opennav() {
	console.log('Navbar opened');
	const navbar = document.getElementById('navbar');
	if (navbar.className === 'sidenav') {
		navbar.className += ' responsive';
	}
	else {
		navbar.className = 'sidenav';
	}
}
