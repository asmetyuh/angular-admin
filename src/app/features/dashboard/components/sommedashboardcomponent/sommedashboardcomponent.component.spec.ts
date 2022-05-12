import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommedashboardcomponentComponent } from './sommedashboardcomponent.component';

describe('SommedashboardcomponentComponent', () => {
  let component: SommedashboardcomponentComponent;
  let fixture: ComponentFixture<SommedashboardcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SommedashboardcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SommedashboardcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
