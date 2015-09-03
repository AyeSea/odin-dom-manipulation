var detailSection = $("<section class='container detail-section'></section>");
var textSection = $("<div class='detail-text-section'></div>");
var textSectionHeader = $("<h1 class='section-header'></h1>");
var textSectionContent = $("<div class='section-content'></div>");

var tabs = { 'about': ['Best Pizza in the City', "We've been in the same location and serving the same piping hot slices for over 50 years."],
             'menu': ['Our Selection', '$2.50 per slice, $16 per pie'],
          'contact': ['Delivery and Catering Available!', "Call us today at (212)-123-4567 for regular orders and catering requests!" ] };

$(document).ready(function() {
	addHeader();
	addCarousel();
	addDetailSection();
	addTabs();
	createDetailTextSection();
	addFooter();
	clickTab();
});

function addToContent(childElement) {
	$('#content').append(childElement);
};

function addHeader() {
	var header = $("<header class='container-fluid site-header'></header>");
	var logo = $("<h1 id='logo'></logo>").text('Piece A Pizza');

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

	$.each(tabs, function(key, val) {
		var tab = $("<li class='tab'></li>").text(key).attr('id', key);
		tabsList.append(tab);
	});

	generateTabContents('about');
};

function createDetailTextSection() {
	detailSection.append(textSection);
	textSection.append(textSectionHeader, textSectionContent);
};

function generateTabContents(tabID) {
	textSectionHeader.text(tabs[tabID][0]);
	textSectionContent.text(tabs[tabID][1]);
};


function addFooter() {
	var footer = $("<footer class='site-footer'></footer>");
	var footerContainer = $("<div class='container'></div>");
	var copyright = $("<small id='copyright'></small>").text("2015 Andrew Chung");
	var footerAddress = $("<address id='footer-address'></address>").text('123 Main Street, New York, NY, 10022');

	addToContent(footer);
	footer.append(footerContainer);
	footerContainer.append(copyright, footerAddress);
};

function clickTab() {
	$('.tab').click(function() {
		generateTabContents($(this).attr('id'));
	});
};