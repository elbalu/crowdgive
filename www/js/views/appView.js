define(['nougat', 'jquery', 'BaseView', 'backbone', 'Bootstrap'], function(nougat, $, BaseView, Backbone) {

	'use strict';


	var AppGetView = BaseView.extend({

		initialize: function() {
			/*global console:true */
			
			if (console && console.log) {
				
			}
			/*global console:false */
		},
		getPage: function (url) {
            // var that = this;
            // that.childViews.landing.hideTemplate();
            // that.childViews.about.hideTemplate();

            // $('body').addClass('loading');
            $.get(url, function (json) {
                // that.childViews[json.viewName].renderTemplate(json, function() {
                //     that.childViews[json.viewName].showTemplate();
                //     $('body').removeClass('loading');
                // });
					console.log(json);

            });
        }

	});

	 return AppGetView;

});
