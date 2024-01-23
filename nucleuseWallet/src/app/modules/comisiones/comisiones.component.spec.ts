import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesComponent } from './comisiones.component';

describe('ComisionesComponent', () => {
  let component: ComisionesComponent;
  let fixture: ComponentFixture<ComisionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ComisionesComponent]
    });
    fixture = TestBed.createComponent(ComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
