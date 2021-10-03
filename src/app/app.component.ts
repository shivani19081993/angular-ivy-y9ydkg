import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  candidates = [
    { id: 1, first_name: '', last_name: '', email: '', gender: '' },
  ];
}
/*var app = angular.module('plunker', []);
app.controller('MainCtrl', function ($scope) {
  $scope.candidates = [
    { id: 1, first_name: '', last_name: '', email: '', gender: '' },
  ];
});*/
