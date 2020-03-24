import { Component, OnInit} from '@angular/core';
import { Activity } from '../activity';
import { POSectionsService } from '../posections.service';

@Component({
  selector: 'app-program-overview',
  templateUrl: './program-overview.component.html',
  styleUrls: ['./program-overview.component.css']
})
export class ProgramOverviewComponent implements OnInit {
  constructor(private _poSections: POSectionsService) { }

  active$ = this._poSections.active$
  complete$ = this._poSections.complete$
  bookmarked$ = this._poSections.bookmarked$

  bookmark(activity: Activity) {
    this._poSections.bookmarkActivity(activity);
  }

  unbookmark(activity: Activity) {
    this._poSections.unbookmarkActivity(activity);
  }

  ngOnInit(): void { }

}
