define(['nougat', 'jquery', 'BaseView', 'Bootstrap'], function(nougat, $, BaseView) {

	'use strict';
	var AppView = BaseView.extend({

		initialize: function() {
			/*global console:true */
			
			if (console && console.log) {
alert('initialized');
				
			}
			/*global console:false */
		}

	});

	$(function() {
		alert('hhh');
		var app = new AppView();
	});

});
