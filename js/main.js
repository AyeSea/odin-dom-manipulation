$(document).ready(function() {
	addHeader();
	addCarousel();
	addAboutSection();
	addTabs();
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
	var sectionHeader = $("<h1 class='section-header'></h1>").text('Serving New York City for over 50 years...');
	var p = $("<p></p>").text('Come grab a slice today!');

	addToContent(detailSection);
	detailSection.append(sectionHeader, p);
};

function addTabs() {
	var tabsList = $("<ul class='tabs-list'></ul>");
	$('.detail-section').prepend(tabsList);
	var tabNames = ['About', 'Menu', 'Contact'];

	$.each(tabNames, function(i, val) {
		var tab = $("<li class='tab'></li>").text(val);
		tabsList.append(tab);
	});

};

function addFooter() {
	var footer = $("<footer class='site-footer'></footer>");
	var footerContainer = $("<div class='container'></div>");
	var copyright = $("<small id='copyright'></small>").text("2015 Andrew Chung");
	var footerAddress = $("<address id='footer-address'></address>").text('136-55 Roosevelt Ave, Flushing, NY 11354');

	addToContent(footer);
	footer.append(footerContainer);
	footerContainer.append(copyright, footerAddress);
};
