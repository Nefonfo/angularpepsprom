import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
enum type {
  'COSTO PROMEDIO',
  'PEPS',
}
@Component({
  selector: 'app-card-sheet',
  templateUrl: './card-sheet.component.html',
  styleUrls: ['./card-sheet.component.scss']
})
export class CardSheetComponent implements OnInit {



  @Input()
  title: string;

  @Input()
  type: type;

  @Input()
  id: string;
  constructor(private readonly navigator: Router) { }

  ngOnInit() {
  }

  navigateTo(id: string) {
    this.navigator.navigate(['/info', id]);
  }

}
