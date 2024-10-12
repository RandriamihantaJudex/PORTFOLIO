import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowlottieComponent } from './arrowlottie.component';

describe('ArrowlottieComponent', () => {
  let component: ArrowlottieComponent;
  let fixture: ComponentFixture<ArrowlottieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowlottieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowlottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
