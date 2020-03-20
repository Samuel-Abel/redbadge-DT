import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindplaceComponent } from './findplace.component';

describe('FindplaceComponent', () => {
  let component: FindplaceComponent;
  let fixture: ComponentFixture<FindplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
