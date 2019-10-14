import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SheetStorageService } from 'src/app/core/http-services/sheet-storage.service';

@Component({
  selector: 'app-info-sheet-page',
  templateUrl: './info-sheet-page.component.html',
  styleUrls: ['./info-sheet-page.component.scss']
})
export class InfoSheetPageComponent implements OnInit {
urlData: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private readonly sheetsStorageService: SheetStorageService,
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.searchSheet(params.id);
    });
  }

  async searchSheet(id: string) {
    const res = await this.sheetsStorageService.findOneSheet('_id', id);
  }

}
