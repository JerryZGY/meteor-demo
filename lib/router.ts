import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

if (Meteor.isClient) {
    BlazeLayout.setRoot('.root');

    FlowRouter.route('/hello/:id', {
        action: function (param) {
            BlazeLayout.render('hello');
        }
    });

    FlowRouter.route('/info', {
        action: function () {
            BlazeLayout.render('info');
        }
    });
}