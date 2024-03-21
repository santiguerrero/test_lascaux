import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFilmsComponent } from './dashboard-films.component';

describe('DashboardFilmsComponent', () => {
  let component: DashboardFilmsComponent;
  let fixture: ComponentFixture<DashboardFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardFilmsComponent]
    });
    fixture = TestBed.createComponent(DashboardFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
