define(['nougat', 'jquery', 'BaseView', 'backbone', 'views/appView', 'Bootstrap'], function(nougat, $, BaseView, Backbone, AppGetView) {

	'use strict';

	var appGetView =  new AppGetView();

	appGetView.render();

	var AppRouter = Backbone.Router.extend({
		routes: {
			'landing': 'landing',
			'about': 'about',
			'': 'landing'
		},

		about: function() {
			appGetView.getPage('http://crowdgive.aws.af.cm/about');
		},

		landing: function() {
			appGetView.getPage('http://crowdgive.aws.af.cm/landing');
		},

		default: function() {
			Backbone.history.navigate('#landing');
		}
	});

	var appRouter = new AppRouter();
	Backbone.history.start();

	var AppView = BaseView.extend({

		initialize: function() {
			/*global console:true */
			
			if (console && console.log) {
				
			}
			/*global console:false */
		}

	});

	$(function() {
		var app = new AppView();
		

	});

});
