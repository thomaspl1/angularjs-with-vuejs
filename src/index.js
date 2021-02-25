import * as components from './angular/app/components/*.js'

var app = angular.module('app', ['ajs', 'vjs']);

for (component in components) {
    angular.component(component, components[component].default);
}