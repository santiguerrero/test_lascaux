import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementFilmsComponent } from './management-films.component';

describe('ManagementFilmsComponent', () => {
  let component: ManagementFilmsComponent;
  let fixture: ComponentFixture<ManagementFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementFilmsComponent]
    });
    fixture = TestBed.createComponent(ManagementFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
