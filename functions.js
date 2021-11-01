function showhome() {
	document.getElementById('home').style.display = 'flex';
	document.getElementById('featured-vtubers').style.display = 'none';
	document.getElementById('history').style.display = 'none';
	document.getElementById('volunteering').style.display = 'none';
}

function showFeatured() {
	document.getElementById('home').style.display = 'none';
	document.getElementById('featured-vtubers').style.display = 'flex';
	document.getElementById('history').style.display = 'none';
	document.getElementById('volunteering').style.display = 'none';
}

function showHistory() {
	document.getElementById('home').style.display = 'none';
	document.getElementById('featured-vtubers').style.display = 'none';
	document.getElementById('history').style.display = 'flex';
	document.getElementById('volunteering').style.display = 'none';
}

function showVolunteering() {
	document.getElementById('home').style.display = 'none';
	document.getElementById('featured-vtubers').style.display = 'none';
	document.getElementById('history').style.display = 'none';
	document.getElementById('volunteering').style.display = 'flex';
}
