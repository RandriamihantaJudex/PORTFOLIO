import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitiesComponent } from './tities.component';

describe('TitiesComponent', () => {
  let component: TitiesComponent;
  let fixture: ComponentFixture<TitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
