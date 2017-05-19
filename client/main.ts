import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';

Template.hello.onCreated(function () {

});

Template.hello.helpers({
  tasks: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
  getNumberFromText: function (text: string,) {
    return text.substr(13, 1);
  },
  fetchData: function() {
    // const data = table.find({all});
    return 'data'
  }
});

Template.hello.events({
  'mouseenter #red'(e) {
    $(e.target).css("background-color", "red");
  },
  'mouseleave #red'(e) {
    $(e.target).css("background-color", "black");
  }
});