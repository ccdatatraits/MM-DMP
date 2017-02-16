import { Component } from 'angular2/core';

@Component({
    selector: 'mm-app',
    template: `
	<div><h1>{{pageTitle}}</h1>
		<div>MediaMath Component</div>
	</div>
	`

})
export class AppComponent {
    pageTitle: string = 'MediaMath DMP';
}