import { Tests } from 'collections/tests';

export function loadTests() {
  if (!Tests.find().count()) {

    let test = {
      num: 1
    };
    Tests.insert(test);

    test = {
      num: 2
    };
    Tests.insert(test);
  }
}
