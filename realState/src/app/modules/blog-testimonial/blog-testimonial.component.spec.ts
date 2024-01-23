import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTestimonialComponent } from './blog-testimonial.component';

describe('BlogTestimonialComponent', () => {
  let component: BlogTestimonialComponent;
  let fixture: ComponentFixture<BlogTestimonialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlogTestimonialComponent]
    });
    fixture = TestBed.createComponent(BlogTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
