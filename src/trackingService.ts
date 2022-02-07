import { Injectable } from "@angular/core";
import mixpanel from 'mixpanel-browser';
import { ActionTypes } from "./app/models/ActionTypes";

@Injectable()
export class TrackingService {

    constructor() {

    }

    sendData(actionName: ActionTypes, link?: string, game?: string, category?: string, filter?: string): void {
        const data = {
            platform: 'Web',
            external_member_id: 'id: 1'
        };

        const trackingData = {
            link,
            game,
            category,
            filter
        }

        this.track(actionName, {...data, ...trackingData})
    }

    private track(actionName: ActionTypes, trackingData: any = {}): void {
        mixpanel.track(actionName, trackingData);
    }

}