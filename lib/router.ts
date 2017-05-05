import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
// BlazeLayout.setRoot('body');
if (Meteor.isClient) {
    BlazeLayout.setRoot('body');
    FlowRouter.route('/hello', {
        action: function () {
            BlazeLayout.render('hello');
        }
    });
    FlowRouter.route('/info', {
        action: function () {
            BlazeLayout.render('info');
        }
    });
}