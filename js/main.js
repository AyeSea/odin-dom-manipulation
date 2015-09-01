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
	var detailSection = $("<section class='container detail-section'></section>");
	var sectionHeader = $("<h1 class='section-header'></h1>").text('About Us');
	var p1 = $("<p></p>").text('Serving the best slice in New York City for over 50 years.');
	var p2 = $("<p></p>").text('Come grab a slice today!');

	addToContent(detailSection);
	detailSection.append(sectionHeader, p1, p2);
};

function addFooter() {
	var footer = $("<footer class='site-footer'></footer>");
	var footerContainer = $("<div class='container'></div>");
	var copyright = $("<small id='copyright'></small>").text("&copy; 2015 Andrew Chung");
	var footerAddress = $("<address id='footer-address'></address>").text('136-55 Roosevelt Ave, Flushing, NY 11354');

	addToContent(footer);
	footer.append(footerContainer);
	footerContainer.append(copyright, footerAddress);
};
