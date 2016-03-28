import { loadTests } from 'server/load-tests';
import 'server/tests';

Meteor.startup(() => {
  loadTests();
});
