// Alex -  - JS
'use strict';

$(document).ready(function() {
	//first
	let clicker1 = $('#first');
	clicker1.on('click', clickHandler1);

	function clickHandler1() {
		let box = $('#message-box1');

		if (box.hasClass('hidden')) {
			box.attr('class', '');
		} else {
			box.attr('class', 'hidden');
		}
	}

	//second
	let clicker2 = $('#second');
	clicker2.on('click', clickHandler2);

	function clickHandler2() {
		let box = $('#message-box2');

		if (box.hasClass('hidden')) {
			box.attr('class', '');
		} else {
			box.attr('class', 'hidden');
		}
	}

	//third
	let clicker3 = $('#third');
	clicker3.on('click', clickHandler3);

	function clickHandler3() {
		let box = $('#message-box3');

		if (box.hasClass('hidden')) {
			box.attr('class', '');
		} else {
			box.attr('class', 'hidden');
		}
	}
	
});














