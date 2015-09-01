$(document).ready(function() {
	addHeader();
	addCarousel();
	addAboutSection();
	addFooter();
});

function addHeader() {
	var header = $("<header class='container-fluid site-header'></header>");
	var logo = $("<h1 id='logo'></logo>").text('Lucia Pizza');

	$('#content').append(header);
	header.append(logo);
};

function addCarousel() {
};

function addAboutSection() {
};

function addFooter() {
};
