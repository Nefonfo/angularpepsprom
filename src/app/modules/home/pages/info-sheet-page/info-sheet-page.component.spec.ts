import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSheetPageComponent } from './info-sheet-page.component';

describe('InfoSheetPageComponent', () => {
  let component: InfoSheetPageComponent;
  let fixture: ComponentFixture<InfoSheetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSheetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSheetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
