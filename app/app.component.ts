import { Component } from 'angular2/core';
import {SegmentListComponent} from "./segments/segment-list-component";

@Component({
    selector: 'mm-app',
    template: `
	<div><h1>{{pageTitle}}</h1>
		<mm-segments></mm-segments>
	</div>
	`,
    directives: [SegmentListComponent]

})
export class AppComponent {
    pageTitle: string = 'MediaMath DMP';
}