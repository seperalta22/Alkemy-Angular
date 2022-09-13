import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCardComponent } from './dish-card.component';

describe('DishesCardComponent', () => {
  let component: DishCardComponent;
  let fixture: ComponentFixture<DishCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DishCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
