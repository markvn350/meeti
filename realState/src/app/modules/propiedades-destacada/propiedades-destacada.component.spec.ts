import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesDestacadaComponent } from './propiedades-destacada.component';

describe('PropiedadesDestacadaComponent', () => {
  let component: PropiedadesDestacadaComponent;
  let fixture: ComponentFixture<PropiedadesDestacadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PropiedadesDestacadaComponent]
    });
    fixture = TestBed.createComponent(PropiedadesDestacadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
