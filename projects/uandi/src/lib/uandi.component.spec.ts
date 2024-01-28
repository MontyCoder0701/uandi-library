import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UandiComponent } from './uandi.component';

describe('UandiComponent', () => {
  let component: UandiComponent;
  let fixture: ComponentFixture<UandiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UandiComponent],
    });
    fixture = TestBed.createComponent(UandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
