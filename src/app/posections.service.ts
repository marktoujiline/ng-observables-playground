import { Injectable } from '@angular/core';
import { Activity } from './activity';
import { PODataService } from './podata.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class POSectionsService {
  constructor(private _data: PODataService) { }

  active$: Observable<Activity[]> = this._data.programOverviewData$.pipe(
    map(activities => activities.filter(a => a.type === 'active'))
  );

  complete$: Observable<Activity[]> = this._data.programOverviewData$.pipe(
    map(activities => activities.filter(a => a.type === 'complete'))
  );

  bookmarked$: Observable<Activity[]> = this._data.programOverviewData$.pipe(
    map(activities => activities.filter(a => a.type === 'bookmark'))
  );

  bookmarkActivity(activity: Activity) {
    const newActivity: Activity = {...activity, ...{type: 'bookmark'}};
    this._data.updateActivity(newActivity);
  }

  unbookmarkActivity(activity: Activity) {
    const newActivity: Activity = {...activity, ...{type: 'complete'}};
    this._data.updateActivity(newActivity);
  }
}
