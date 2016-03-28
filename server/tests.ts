import { Tests } from 'collections/tests';

Meteor.publish('tests', function () {
  return Tests.find();
});
