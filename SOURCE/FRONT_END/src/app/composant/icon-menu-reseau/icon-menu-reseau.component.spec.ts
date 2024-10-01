import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMenuReseauComponent } from './icon-menu-reseau.component';

describe('IconMenuReseauComponent', () => {
  let component: IconMenuReseauComponent;
  let fixture: ComponentFixture<IconMenuReseauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMenuReseauComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconMenuReseauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
