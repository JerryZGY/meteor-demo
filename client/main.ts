import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
});

Template.hello.helpers({
    param: function() {
        return FlowRouter.getParam('id');
    },
    name: "Jerry",
    user: true,
    tasks: [
        { text: 'This is task 1' },
        { text: 'This is task 2' },
        { text: 'This is task 3' },
    ],
});

Template.hello.events({
  'click button'() {
      FlowRouter.go('/info');
  },
});
