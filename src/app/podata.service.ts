import { Injectable } from '@angular/core';
import { Activity } from './activity';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PODataService {
  private _programOverviewData: BehaviorSubject<Activity[]> = new BehaviorSubject([]);

  constructor() { 
    this.setProgramOverviewData([
      {
        id: 0,
        name: "ActivityOne",
        type: "active"
      },
      {
        id: 1,
        name: "ActivityTwo",
        type: "complete"
      },
      {
        id: 2,
        name: "ActivityThree",
        type: "bookmark"
      }
    ])
  }

  programOverviewData$: Observable<Activity[]> = this._programOverviewData;

  setProgramOverviewData(data: Activity[]): void {
    this._programOverviewData.next(data);
  }

  updateActivity(activity: Activity): void {
    this._programOverviewData.next(
      this._programOverviewData.getValue().map(a =>{
          return a.id === activity.id ? {...activity} : a;
        })
    )
  }
}
