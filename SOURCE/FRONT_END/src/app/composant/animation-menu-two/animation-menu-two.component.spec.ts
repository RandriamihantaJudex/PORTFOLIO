import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationMenuTwoComponent } from './animation-menu-two.component';

describe('AnimationMenuTwoComponent', () => {
  let component: AnimationMenuTwoComponent;
  let fixture: ComponentFixture<AnimationMenuTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationMenuTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationMenuTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
