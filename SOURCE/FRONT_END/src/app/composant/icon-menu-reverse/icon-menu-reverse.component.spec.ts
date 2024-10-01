import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMenuReverseComponent } from './icon-menu-reverse.component';

describe('IconMenuReverseComponent', () => {
  let component: IconMenuReverseComponent;
  let fixture: ComponentFixture<IconMenuReverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMenuReverseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconMenuReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
