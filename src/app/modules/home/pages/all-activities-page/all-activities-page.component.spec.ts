import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllActivitiesPageComponent } from './all-activities-page.component';

describe('AllActivitiesPageComponent', () => {
  let component: AllActivitiesPageComponent;
  let fixture: ComponentFixture<AllActivitiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllActivitiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllActivitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
