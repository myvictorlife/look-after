import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaperDetailComponent } from './diaper-detail.component';

describe('DiaperDetailComponent', () => {
  let component: DiaperDetailComponent;
  let fixture: ComponentFixture<DiaperDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaperDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
