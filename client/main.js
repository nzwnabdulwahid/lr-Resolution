Resolution = new Mongo.Collection('resolutions');


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
	resolutions: function(){
		return Resolution.find();
	}
});

Template.body.events({
	'submit .new-resolution' : function(event){
		var title = event.target.title.value;


		Resolution.insert({
			title: title,
			createdAt: new Date()
		});

		event.target.title.value = '';
		return false;
	}

});

Template.resolution.events({
	'click .toggle-checked': function(){
		Resolution.update(this._id, {$set: {
			checked: !this.checked
		}})
	},

	'click .delete': function(){
		Resolution.remove(this._id);
	}


});