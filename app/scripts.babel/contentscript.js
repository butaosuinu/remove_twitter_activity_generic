'use strict';

$(function () {
	$('.js-activity-generic').remove();
	(new MutationObserver (function (mutationRecords, observer) {
		var target
		(target = $('.js-activity-generic')) ? $('.js-activity-generic').remove() : null;
	})).observe(document.querySelector('body'), {childList:true, subtree: true})
})