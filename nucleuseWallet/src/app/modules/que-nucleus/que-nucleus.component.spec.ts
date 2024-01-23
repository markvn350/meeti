import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueNucleusComponent } from './que-nucleus.component';

describe('QueNucleusComponent', () => {
  let component: QueNucleusComponent;
  let fixture: ComponentFixture<QueNucleusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QueNucleusComponent]
    });
    fixture = TestBed.createComponent(QueNucleusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
