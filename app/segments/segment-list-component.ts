import { Component } from 'angular2/core';

@Component({
    selector: 'mm-segments',
    templateUrl: 'app/segments/segment-list-component.html'

})
export class SegmentListComponent {
    pageTitle: string = 'Segment List';
    segments: any[] = [
        {
            "name": "mattpietal-test",
            "pixel_id": 983780,
            "owner_type": "advertiser",
            "creator_id": 9042,
            "owner_id": 161025,
            "version": 0,
            "id": 100001,
            "SDLString": "with id_100001 = (owner in (2576404) filter by (attr_1 = 981997)) return id_100001",
            "expression": "\"id_100001\"",
            "status": "enabled",
            "creator_username": "mpietal",
            "created_on": "2016-03-16T11:46:21",
            "type": "segment",
            "editable": true
        },
        {
            "name": "mattpietal-test",
            "pixel_id": 983781,
            "owner_type": "advertiser",
            "creator_id": 9042,
            "owner_id": 161025,
            "version": 0,
            "id": 100002,
            "SDLString": "with id_100002 = (owner in (2576404) filter by (attr_1 = 981997)) return id_100002",
            "expression": "\"id_100002\"",
            "status": "enabled",
            "creator_username": "mpietal",
            "created_on": "2016-03-16T11:47:09",
            "type": "segment",
            "editable": true
        }
    ];
}
