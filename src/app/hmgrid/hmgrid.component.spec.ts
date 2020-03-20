import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmgridComponent } from './hmgrid.component';

describe('HmgridComponent', () => {
  let component: HmgridComponent;
  let fixture: ComponentFixture<HmgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
