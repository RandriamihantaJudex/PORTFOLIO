import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationMenuComponent } from './animation-menu.component';

describe('AnimationMenuComponent', () => {
  let component: AnimationMenuComponent;
  let fixture: ComponentFixture<AnimationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
