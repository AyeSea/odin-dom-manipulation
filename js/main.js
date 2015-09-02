var detailSection = $("<section class='container detail-section'></section>");
var textSection = $("<div class='detail-text-section'></div>");
var textSectionHeader = $("<h1 class='section-header'></h1>");
var textSectionContent = $("<div class='section-content'></div>");

var tabs = ['about', 'menu', 'contact'];

var aboutHeaderText = 'Serving New York City for over 50 years...';
var menuHeaderText = 'Our Selection';
var contactHeaderText = 'Place an Order Today!';

$(document).ready(function() {
	addHeader();
	addCarousel();
	addDetailSection();
	addTabs();
	createDetailTextSection();
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

function addDetailSection() {
	addToContent(detailSection);
};


function addTabs() {
	var tabsList = $("<ul class='tabs-list'></ul>");
	detailSection.append(tabsList);

	$.each(tabs, function(i, val) {
		var tab = $("<li class='tab'></li>").text(val).attr('id', val);
		tabsList.append(tab);
	});

};

function createDetailTextSection() {
	detailSection.append(textSection);
	textSection.append(textSectionHeader, textSectionContent);
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
