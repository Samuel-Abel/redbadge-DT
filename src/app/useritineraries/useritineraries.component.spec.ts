import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseritinerariesComponent } from './useritineraries.component';

describe('UseritinerariesComponent', () => {
  let component: UseritinerariesComponent;
  let fixture: ComponentFixture<UseritinerariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseritinerariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseritinerariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
