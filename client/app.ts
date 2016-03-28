import { Component } from 'angular2/core';
import { bootstrap, MeteorComponent } from 'angular2-meteor';
import { Tests } from 'collections/tests';

@Component({
  selector: 'app',
  template: `
    Tests:
    <div *ngFor="#test of tests">
      <p>{{test.num}}</p>
    </div>
  `
})
export class App extends MeteorComponent {
  tests: Mongo.Cursor<Object>;

  constructor() {
    super();
  }

  ngOnInit()
  {
    this.subscribe('tests', () => {
      this.autorun(() => {
        this.tests = Tests.find();
        console.log('this.tests', this.tests.fetch()); //////////////
      });
    }, true);
  }
}
bootstrap(App);
