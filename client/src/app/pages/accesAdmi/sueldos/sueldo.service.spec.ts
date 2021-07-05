import { TestBed } from '@angular/core/testing';

import { SueldoService } from './sueldo.service';

describe('SueldoService', () => {
  let service: SueldoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SueldoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
