$(document).ready(function() {
	addHeader();
	addCarousel();
	addAboutSection();
	addFooter();
});

function addToContent(childElement) {
	$('#content').append(childElement);
};

function addHeader() {
	var header = $("<header class='container-fluid site-header'></header>");
	var logo = $("<h1 id='logo'></logo>").text('Lucia Pizza');

	addToContent(header);
	header.append(logo);
};

function addCarousel() {
	var carousel = $("<section class='container-fluid carousel'></section>");
	var slide1 = $("<div class='slide current-slide' id='slide-1'></div>");

	addToContent(carousel);
	carousel.append(slide1);
};

function addAboutSection() {
};

function addFooter() {
};
