Resolution = new Mongo.Collection('resolutions');


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
	resolutions: function(){
		return Resolution.find();
	}
});