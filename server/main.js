import { Meteor } from 'meteor/meteor';

Resolution = new Mongo.Collection('resolutions');

Meteor.startup(() => {
  // code to run on server at startup
});
