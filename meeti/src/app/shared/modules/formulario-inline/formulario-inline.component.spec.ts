import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInlineComponent } from './formulario-inline.component';

describe('FormularioInlineComponent', () => {
  let component: FormularioInlineComponent;
  let fixture: ComponentFixture<FormularioInlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormularioInlineComponent]
    });
    fixture = TestBed.createComponent(FormularioInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
