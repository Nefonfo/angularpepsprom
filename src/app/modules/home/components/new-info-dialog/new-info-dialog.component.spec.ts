import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInfoDialogComponent } from './new-info-dialog.component';

describe('NewInfoDialogComponent', () => {
  let component: NewInfoDialogComponent;
  let fixture: ComponentFixture<NewInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
