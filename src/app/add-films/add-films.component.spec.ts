import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmsComponent } from './add-films.component';

describe('AddFilmsComponent', () => {
  let component: AddFilmsComponent;
  let fixture: ComponentFixture<AddFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
