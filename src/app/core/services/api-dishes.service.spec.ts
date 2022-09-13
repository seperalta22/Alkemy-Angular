import { TestBed } from '@angular/core/testing';

import { ApiDishesService } from './api-dishes.service';

describe('ApiDishesService', () => {
  let service: ApiDishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
